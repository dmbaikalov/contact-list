import { test, expect } from "../fixtures/fixtures";
import { createScreenShotOnFailure } from "../utils/test.utils";

test.afterEach(async ({ page }) => {
  if (test.info().status === 'failed') {
    await createScreenShotOnFailure(page, test.info().title);
    }
});


