import json
import requests

URLs = [
    'd3fc/d3fc',
    'vega/vega',
    'novus/nvd3',
    'robinfhu/forest-d3',
    'palantir/plottable',
    'plotly/plotly.js',
    'misoproject/d3.chart',
    'mozilla/metrics-graphics',
]

results = {}

for url in URLs:
    r = requests.get('https://api.github.com/repos/' + url, headers={'Accept': 'application/vnd.github.preview'})
    results[url] = json.loads(r.text)

with open('d3-libraries.json', 'w') as outfile:
    json.dump(results, outfile)