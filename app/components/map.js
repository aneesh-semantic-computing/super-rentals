import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const GEOAPIFY_API = 'https://maps.geoapify.com/v1/staticmap?style=osm-carto';

export default class MapComponent extends Component {
  get src() {
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `&center=lonlat:${lng},${lat}&zoom=${zoom}`;
    let dimensions = `&width=${width}&height=${height}`;
    let accessToken = `&apiKey=${this.token}`;

    return `${GEOAPIFY_API}${dimensions}${coordinates}${accessToken}`;
  }

  get token() {
    return encodeURIComponent(ENV.GEOAPIFY_TOKEN);
  }
}
