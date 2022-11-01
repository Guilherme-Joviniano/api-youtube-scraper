import YoutubeService from '../services/YoutubeService';

class SearchController {
  async index(req, res) {
    const { term } = req.query;

    const r = await YoutubeService.getContent(term);

    return res.json(r);
  }
}

export default new SearchController();
