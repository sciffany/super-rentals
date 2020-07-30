import Component from "@glimmer/component";

const TWITTER_API = "https://twitter.com/intent/tweet";
const MESSAGE = "Nice find! This looks like a nice place to stay near";

export default class RentalDetailedComponent extends Component {
  get twitter() {
    console.log(this.args);
    const message = `${MESSAGE}/${this.args}`;
    console.log(message);
    const url = `${TWITTER_API}?${encodeURIComponent(message)}`;
    console.log(url);
    return url;
  }
}
