import appConfigs from '../../../configs/app';

export default (req, res, next) => {
  if (
    !Object.entries(req.query).filter(([key]) => appConfigs.QUERIES.includes(key))[0]
  ) {
    return res.status(400).json({
      code: 400,
      error: true,
      message: ['Invalid Querie Parameter'],
    });
  }
  return next();
};
