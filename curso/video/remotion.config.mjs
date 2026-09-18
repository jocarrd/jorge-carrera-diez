import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setConcurrency(4);
Config.setBrowserExecutable(
  process.env.CHROME_PATH ??
    "/home/anne/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome",
);
