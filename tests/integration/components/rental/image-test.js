import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | rental/image", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders the given image", async function (assert) {
    await render(hbs`<Rental::Image
    src="/assets/images/teaching-tomster.png"
    alt="Teaching Tomster"
  />`);

    assert.dom(".image").exists();
    assert
      .dom(".image img")
      .hasAttribute("src", "/assets/images/teaching-tomster.png");

    assert.dom(".image img").hasAttribute("alt", "Teaching Tomster");
  });

  test("clicking on it renders the image", async (assert) => {
    await render(hbs`<Rental::Image
    src="/assets/images/teaching-tomster.png"
    alt="Teaching Tomster"
  />`);

    assert.dom("button").exists();
    assert.dom(".image").doesNotHaveClass("large");
    assert.dom(".image small").hasText("View Larger");

    await click("button.image");

    assert.dom(".image").hasClass("large");
    assert.dom(".image small").hasText("View Smaller");

    await click("button.image");

    assert.dom(".image").doesNotHaveClass("large");
    assert.dom(".image small").hasText("View Larger");
  });
});
