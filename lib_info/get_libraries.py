import json
import requests

URLs = [
    # 'd3fc/d3fc',
    # 'vega/vega',
    # 'novus/nvd3',
    # 'robinfhu/forest-d3',
    # 'palantir/plottable',
    # 'plotly/plotly.js',
    # 'misoproject/d3.chart',
    # 'mozilla/metrics-graphics',
    "alexandersimoes/d3plus",
    "c3js/c3",
    "heavysixer/d4",
    "epochjs/epoch",
    "pykih/PykCharts.js",
    "shutterstock/rickshaw",
]

results = {}

for url in URLs:
    r = requests.get('https://api.github.com/repos/' + url, headers={'Accept': 'application/vnd.github.preview'})
    results[url] = json.loads(r.text)

with open('d3-libraries-bis.json', 'w') as outfile:
    json.dump(results, outfile)