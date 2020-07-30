import Route from "@ember/routing/route";

export default class AboutRoute extends Route {
  async model() {
    console.log("about");
  }
}
