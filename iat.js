// Race IAT: Black vs White | Good vs Bad
const iat = {
  category1: { name: 'Black', title: { media: { word: 'Black People' }, css: { color: '#31940F', 'font-size': '2em' }, height: 4 } },
  category2: { name: 'White', title: { media: { word: 'White People' }, css: { color: '#31940F', 'font-size': '2em' }, height: 4 } },
  attribute1: { name: 'Good', title: { media: { word: 'Good' }, css: { color: '#0000FF', 'font-size': '2em' }, height: 4 }, stimulusMedia: [{ word: 'Joy' },{ word: 'Love' },{ word: 'Peace' },{ word: 'Wonderful' },{ word: 'Pleasure' },{ word: 'Laughter' },{ word: 'Happy' },{ word: 'Glorious' }], stimulusCss: { color: '#0000FF', 'font-size': '2em' }},
  attribute2: { name: 'Bad', title: { media: { word: 'Bad' }, css: { color: '#0000FF', 'font-size': '2em' }, height: 4 }, stimulusMedia: [{ word: 'Agony' },{ word: 'Terrible' },{ word: 'Horrible' },{ word: 'Evil' },{ word: 'Failure' },{ word: 'Awful' },{ word: 'Hurt' },{ word: 'Nasty' }], stimulusCss: { color: '#0000FF', 'font-size': '2em' }},
  base_url: ''
};

// Use standard IAT js plugin and log data
MinnoJS.init().then(() => {
  const plugin = iatExtension(iat);
  const timeline = plugin.getTimeline();

  MinnoJS.runTimeline(timeline, {
    on_finish: (data) => {
      if (window.Qualtrics) {
        Qualtrics.SurveyEngine.setEmbeddedData('IAT_race_d', data.d);
        Qualtrics.SurveyEngine.setEmbeddedData('IAT_race_data', JSON.stringify(data));
      } else {
        console.log('IAT results:', data);
      }
      document.body.innerHTML = "<h3>Thank you for completing the task!</h3>";
    }
  });
});
