import json
import requests


keys = [
    'name',
    'url',
    'stargazers_count',
    'created_at',
    'description',
    'forks',
    'language',
    'open_issues',
    'watchers',
    'size',
]

d3Libraries = [
    'd3fc/d3fc',
    'vega/vega',
    'novus/nvd3',
    'robinfhu/forest-d3',
    'palantir/plottable',
    'plotly/plotly.js',
    'misoproject/d3.chart',
    'mozilla/metrics-graphics',
    "alexandersimoes/d3plus",
    "c3js/c3",
    "heavysixer/d4",
    "epochjs/epoch",
    "pykih/PykCharts.js",
    "shutterstock/rickshaw",
    "dc-js/dc.js",
    "kotojs/kotojs",
]

reactD3Libraries = [
    'eventbrite/britecharts-react',
    'recharts/recharts',
    # 'FormidableLabs/victory',
    # 'uber/react-vis',
    # 'hshoff/vx',
    # 'artyomtrityak/d3-explorer',
    # 'react-d3',
    # 'yang-wei/rd3',
    # 'codesuki/react-d3-components',
    # 'react-d3-library/react-d3-library',
    # 'bgrsquared/d3-react-squared',
    # 'plouc/nivo',
    # 'emeeks/semiotic',
]


# resultsD3libraries = {}

# for url in d3Libraries:
#     r = requests.get('https://api.github.com/repos/' + url, headers={'Accept': 'application/vnd.github.preview'})
#     resultsD3libraries[url] = json.loads(r.text)

# with open('d3-lib.json', 'w') as outfile:
#     json.dump(resultsD3libraries, outfile)

resultsReactD3libraries = {}

for url in reactD3Libraries:
    r = requests.get('https://api.github.com/repos/' + url, headers={'Accept': 'application/vnd.github.preview'})
    rawResults = json.loads(r.text)
    resultsReactD3libraries[url] = map(reactD3Libraries.get, keys)

# r = requests.get('https://api.github.com/repos/eventbrite/britecharts-react', headers={'Accept': 'application/vnd.github.preview'})

with open('react-d3-lib.json', 'w') as outfile:
    json.dump(resultsReactD3libraries, outfile)