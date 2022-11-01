/* eslint-disable max-len */
import axios from 'axios';

import { UTILS } from './helpers/methods';

const BASE_PLAYLIST_URL = 'https://www.youtube.com/playlist?list=';

class YoutubeService {
  async getContent(term) {
    const html = await UTILS.YTFetch(term);

    const initYtData = UTILS.getInitData(html);

    this.initData = initYtData;

    const initContent = initYtData.contents;

    if (!initContent) {
      return false;
    }

    const firstResults = initYtData.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents;

    const data = [];

    firstResults.forEach(({ videoRenderer }) => {
      if (!videoRenderer) return;

      const id = videoRenderer.videoId;
      const title = videoRenderer.title.runs[0];

      data.push({ id, title });
    });

    return data;
  }

  async getPlaylistVideos(id) {
    const { data } = await axios(BASE_PLAYLIST_URL + id);

    const initData = UTILS.getInitData(data);

    const response = initData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer.contents
      .map(({ playlistVideoRenderer }) => {
        if (playlistVideoRenderer) return playlistVideoRenderer.videoId;
        return null;
      })
      .slice(0, -1);

    return response;
  }
}

export default new YoutubeService();
