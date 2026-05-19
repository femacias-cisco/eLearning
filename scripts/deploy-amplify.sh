#!/usr/bin/env bash
set -euo pipefail

APP_ID="${AMPLIFY_APP_ID:-d17hcfxcpagshj}"
BRANCH="${AMPLIFY_BRANCH:-developer}"
PROFILE="${AWS_PROFILE:-elearning-dev}"
REGION="${AWS_REGION:-us-east-1}"
ZIP_PATH="${TMPDIR:-/tmp}/elearning-amplify-deploy.zip"

npm run build
rm -f "$ZIP_PATH"

(
  cd dist
  zip -qr "$ZIP_PATH" .
)

deployment_json="$(
  aws amplify create-deployment \
    --app-id "$APP_ID" \
    --branch-name "$BRANCH" \
    --profile "$PROFILE" \
    --region "$REGION" \
    --output json
)"

job_id="$(printf '%s' "$deployment_json" | node -e "let data=''; process.stdin.on('data', c => data += c); process.stdin.on('end', () => console.log(JSON.parse(data).jobId));")"
upload_url="$(printf '%s' "$deployment_json" | node -e "let data=''; process.stdin.on('data', c => data += c); process.stdin.on('end', () => console.log(JSON.parse(data).zipUploadUrl));")"

curl -fsS -X PUT -H "Content-Type: application/zip" --upload-file "$ZIP_PATH" "$upload_url" >/dev/null

aws amplify start-deployment \
  --app-id "$APP_ID" \
  --branch-name "$BRANCH" \
  --job-id "$job_id" \
  --profile "$PROFILE" \
  --region "$REGION" \
  --query "jobSummary.{jobId:jobId,status:status}" \
  --output json

echo "Deployment started for https://${BRANCH}.${APP_ID}.amplifyapp.com"
