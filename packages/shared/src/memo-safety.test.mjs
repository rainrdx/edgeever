import { describe, expect, test } from "bun:test";
import { isSuspiciousMemoOverwrite } from "./memo-safety.ts";

describe("isSuspiciousMemoOverwrite", () => {
  test("blocks the production incident shape", () => {
    expect(
      isSuspiciousMemoOverwrite(
        "英国 giffgaff 卡激活",
        "原".repeat(550),
        "号商 松松 GPT 菲区",
        "错".repeat(70)
      )
    ).toBe(true);
  });

  test("allows image-width-only saves", () => {
    expect(
      isSuspiciousMemoOverwrite("同一标题", "正文".repeat(300), "同一标题", "正文".repeat(300))
    ).toBe(false);
  });

  test("allows a title rename when content remains intact", () => {
    expect(
      isSuspiciousMemoOverwrite("旧标题", "正文".repeat(300), "新标题", "正文".repeat(290))
    ).toBe(false);
  });

  test("does not interfere with short notes", () => {
    expect(isSuspiciousMemoOverwrite("旧标题", "短内容", "新标题", "")).toBe(false);
  });
});
