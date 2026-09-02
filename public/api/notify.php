<?php
declare(strict_types=1);

header('Content-Type: application/json');

const MAX_BODY_BYTES = 20000;
const SITE_URL = 'https://thrivethroughcancer.co.za';
const OWNER_EMAIL = 'coaching@thrivethroughcancer.co.za';
const FROM_EMAIL = 'coaching@thrivethroughcancer.co.za';

$sessionLabels = [
    'discovery' => 'Discovery Chemistry WhatsApp Call (Free, 10 min)',
    'single' => 'Single Session (R750 / $100, 90 min)',
    'foundation' => 'Foundation Session (R1785 / $275, 3 hours)',
    'program' => '12-Week Programme (R7560 / $1080)',
];

function json_response(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

function clean_text(mixed $value, int $maxLength): string
{
    if (!is_string($value)) {
        return '';
    }

    return substr(trim(str_replace("\0", '', $value)), 0, $maxLength);
}

function parse_payload(array $input, array $sessionLabels): ?array
{
    $type = in_array($input['type'] ?? null, ['booking', 'contact'], true) ? $input['type'] : null;
    $name = clean_text($input['name'] ?? '', 120);
    $email = strtolower(clean_text($input['email'] ?? '', 254));
    $message = clean_text($input['message'] ?? '', 4000);
    $website = clean_text($input['website'] ?? '', 200);

    if (!$type || strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return null;
    }

    if ($type === 'booking') {
        $session = clean_text($input['session'] ?? '', 40);
        if (!array_key_exists($session, $sessionLabels)) {
            return null;
        }

        return [
            'type' => $type,
            'name' => $name,
            'email' => $email,
            'message' => $message,
            'website' => $website,
            'phone' => clean_text($input['phone'] ?? '', 40),
            'session' => $session,
        ];
    }

    $subject = clean_text($input['subject'] ?? '', 120);
    if (!$subject || strlen($message) < 10) {
        return null;
    }

    return [
        'type' => $type,
        'name' => $name,
        'email' => $email,
        'message' => $message,
        'website' => $website,
        'subject' => $subject,
    ];
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Method not allowed.'], 405);
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > MAX_BODY_BYTES) {
    json_response(['error' => 'Request too large.'], 413);
}

if (($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '') === 'cross-site') {
    json_response(['error' => 'Request not allowed.'], 403);
}

$payload = parse_payload(json_decode(file_get_contents('php://input'), true) ?: [], $sessionLabels);
if (!$payload) {
    json_response(['error' => 'Please check the form and try again.'], 400);
}

if ($payload['website']) {
    json_response(['success' => true]);
}

$isBooking = $payload['type'] === 'booking';
$topic = $isBooking ? $sessionLabels[$payload['session']] : $payload['subject'];
$title = $isBooking ? 'New session request' : 'New website enquiry';
$ownerLines = [
    $title,
    '',
    'Name: ' . $payload['name'],
    'Email: ' . $payload['email'],
];

if ($isBooking && $payload['phone']) {
    $ownerLines[] = 'Phone: ' . $payload['phone'];
}

$ownerLines[] = ($isBooking ? 'Session: ' : 'Topic: ') . $topic;
if ($payload['message']) {
    $ownerLines[] = "Message:\n" . $payload['message'];
}
$ownerLines[] = '';
$ownerLines[] = 'Submitted from ' . SITE_URL;

$headers = [
    'From: ThriveThroughCancer <' . FROM_EMAIL . '>',
    'Reply-To: ' . $payload['email'],
    'Content-Type: text/plain; charset=UTF-8',
];

$ownerSent = mail(
    OWNER_EMAIL,
    $title . ': ' . $payload['name'],
    implode("\n", $ownerLines),
    implode("\r\n", $headers)
);

$firstName = strtok($payload['name'], ' ') ?: $payload['name'];
$ackDetail = $isBooking
    ? 'Your request for a ' . $topic . ' has been received.'
    : 'Your enquiry about ' . $topic . ' has been received.';

$ackSent = mail(
    $payload['email'],
    ($isBooking ? 'We received your session request' : 'We received your enquiry') . ' | ThriveThroughCancer',
    "Hello {$firstName},\n\n{$ackDetail}\n\nRenny or a member of the team will reply within one business day.\n\nWarmly,\nThriveThroughCancer",
    implode("\r\n", [
        'From: ThriveThroughCancer <' . FROM_EMAIL . '>',
        'Reply-To: ' . OWNER_EMAIL,
        'Content-Type: text/plain; charset=UTF-8',
    ])
);

if (!$ownerSent || !$ackSent) {
    json_response(['error' => 'We could not send your request. Please use the WhatsApp button or try again.'], 502);
}

json_response(['success' => true]);
