import { execSync } from 'child_process';
import { genDesc } from './gen-desc';

const { REPO_MOD_TOKEN: token, GH_REPO: repo } = process.env;

if (token !== undefined && repo !== undefined) {
  execSync(
    `
    curl -H "Authorization: token ${token}" \
    --request PATCH \
    --data '{"description":"${genDesc()}"}' \
    https://api.github.com/repos/${repo}
  `,
    { stdio: 'inherit' },
  );
}
