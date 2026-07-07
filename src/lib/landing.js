export const GITHUB_URL = "https://github.com/aviralsachdeva9-stack/RepoReview";
export const MARKETPLACE_URL = "https://github.com/marketplace";

export const SETUP_YAML = `name: RepoReview
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  code_review:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run LLaMA 3.3 Code Reviewer
        uses: aviralsachdeva9-stack/RepoReview@v1.0.0
        with:
          groq_api_key: \${{ secrets.GROQ_API_KEY }}`;

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-80px" },
  transition: { staggerChildren: 0.12 },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};