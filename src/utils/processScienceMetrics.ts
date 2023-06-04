const processScienceMetrics = (scienceMetrics: ScienceMetrics) => {
  const processedMetrics: ScienceMetrics = {};

  Object.entries(scienceMetrics).reduce((acc, [key, value]) => {
    const modifiedKey = key.replace(/_/g, " ");
    acc[modifiedKey] = value;
    return acc;
  }, processedMetrics);

  return processedMetrics;
};

export default processScienceMetrics;
