import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | jumbo", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders the current compoentn inside the jumbo header with a tomster", async function (assert) {
    await render(hbs`<Jumbo />`);

    assert.dom(".jumbo").exists();
    assert.dom(".jumbo").hasText("Hello World");
    assert.dom(".jumbo .tomster").exists();
  });
});
