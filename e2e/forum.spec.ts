// e2e/forum.spec.ts
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/");
	await page.evaluate(() => localStorage.clear());
	await page.reload();
});

test("can submit a post and see it appear", async ({ page }) => {
	await page.getByPlaceholder("Write your post...").fill("qwerty");
	await page.getByRole("button", { name: "SEND" }).click();

	await expect(page.getByText("qwerty")).toBeVisible();
});

test("View button navigates to the correct post detail page", async ({
	page,
}) => {
	await page.getByPlaceholder("Write your post...").fill("qwerty");
	await page.getByRole("button", { name: "SEND" }).click();
	await page.getByRole("link", { name: "View" }).first().click();

	await expect(page).toHaveURL(/\/post\/\d+/);
	await expect(page.getByText("qwerty")).toBeVisible();
});

test("can delete a post and it does not come back on refresh", async ({
	page,
}) => {
	await page.getByPlaceholder("Write your post...").fill("Post to be deleted");
	await page.getByRole("button", { name: "SEND" }).click();
	await page.getByRole("button", { name: "Delete" }).click();
	await page.reload();

	await expect(page.getByText("Post to be deleted")).not.toBeVisible();
});

test("cannot submit a post with no text", async ({ page }) => {
	await expect(page.getByRole("button", { name: "SEND" })).toBeDisabled();
});

test("cannot submit a post with only whitespace", async ({ page }) => {
	await page.getByPlaceholder("Write your post...").fill("     ");
	await expect(page.getByRole("button", { name: "SEND" })).toBeDisabled();
});

test("cannot submit a post that is over the character limit", async ({
	page,
}) => {
	await page.getByPlaceholder("Write your post...").fill("a".repeat(1001));
	await expect(page.getByRole("button", { name: "SEND" })).toBeDisabled();
});

test("link in post text is linkified and visible", async ({ page }) => {
	await page
		.getByPlaceholder("Write your post...")
		.fill("werty https://example.com qewruuykuyt");
	await page.getByRole("button", { name: "SEND" }).click();

	const link = page.getByRole("link", { name: "https://example.com" });
	await expect(link).toBeVisible();
	await expect(link).toHaveAttribute("href", "https://example.com");
});

// 404 error if link goess to non existing page
