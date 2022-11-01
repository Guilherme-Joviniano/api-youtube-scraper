import { parse } from 'himalaya';
import axios from 'axios';

export const UTILS = {
  getInitData: (html) => {
    const json = parse(html);

    const body = json[1].children[1].children;

    const script = body
      .filter((el) => el.tagName === 'script')[13]
      .children[0].content.substring(19)
      .slice(0, -1);

    return JSON.parse(script);
  },
  YTFetch: async (term) => {
    const r = await axios.get(
      `https://www.youtube.com/results?search_query=${term}`,
    );
    const { data } = r;
    return data;
  },
};
