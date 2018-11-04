import json
import requests


keys = [
    'name',
    'html_url',
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
    'eventbrite/britecharts',
    'd3fc/d3fc',
    'vega/vega',
    'novus/nvd3',
    'robinfhu/forest-d3',
    'palantir/plottable',
    'plotly/plotly.js',
    'misoproject/d3.chart',
    'mozilla/metrics-graphics',
    'alexandersimoes/d3plus',
    'c3js/c3',
    'heavysixer/d4',
    'epochjs/epoch',
    'shutterstock/rickshaw',
    'dc-js/dc.js',
    'kotojs/kotojs',
    'naver/billboard.js',
]

reactD3Libraries = [
    'eventbrite/britecharts-react',
    'recharts/recharts',
    'FormidableLabs/victory',
    'uber/react-vis',
    'hshoff/vx',
    'artyomtrityak/d3-explorer',
    'react-d3',
    'yang-wei/rd3',
    'codesuki/react-d3-components',
    'react-d3-library/react-d3-library',
    'bgrsquared/d3-react-squared',
    'plouc/nivo',
    'emeeks/semiotic',
]

resultsD3libraries = {}
fD3 = {}
resultsReactD3libraries = {}
fRD3 = {}

for url in d3Libraries:
    r = requests.get('https://api.github.com/repos/' + url, headers={'Accept': 'application/vnd.github.preview'})
    resultsD3libraries[url] = json.loads(r.text)

for url in reactD3Libraries:
    r = requests.get('https://api.github.com/repos/' + url, headers={'Accept': 'application/vnd.github.preview'})
    resultsReactD3libraries[url] = json.loads(r.text)


for url, lib_info in resultsD3libraries.iteritems():
    fD3[lib_info.get('name')] = {
        key: value
        for key, value in lib_info.iteritems()
        if key in keys
    }

for url, lib_info in resultsReactD3libraries.iteritems():
    fRD3[lib_info.get('name')] = {
        key: value
        for key, value in lib_info.iteritems()
        if key in keys
    }

with open('d3-lib.json', 'w') as outfile:
    json.dump(fD3, outfile)

with open('react-d3-lib.json', 'w') as outfile:
    json.dump(fRD3, outfile)
