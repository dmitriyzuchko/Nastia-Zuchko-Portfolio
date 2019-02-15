import glob
import json
import pprint

sub_path = '../../public/'
path = sub_path + 'portfolio-pieces/**/'
image_path_patterns = (path + '*.png', path + '*.jpg')

image_paths = []
for path in image_path_patterns:
    image_paths.extend(glob.glob(path, recursive=True))

text_paths = glob.glob(sub_path + 'portfolio-pieces/**/*.txt', recursive=True)

portfolio_data = {}

for image_path in image_paths:
    seperated_path = image_path.split('/')
    row_id = seperated_path[4]

    piece_id = seperated_path[5]

    if row_id not in portfolio_data:
        portfolio_data[row_id] = {}

    if piece_id not in portfolio_data[row_id]:
        portfolio_data[row_id][piece_id] = {'urls': []}

    portfolio_data[row_id][piece_id]['urls'].append(image_path[len(sub_path):])

for text_path in text_paths:
    seperated_path = text_path.split('/')
    row_id = seperated_path[4]
    piece_id = seperated_path[5]
    file_name = seperated_path[6].split('.')[0]

    with open(text_path, 'r') as text_data:
        text = text_data.read()

    if file_name == 'description':
        portfolio_data[row_id][piece_id]['description'] = text
    else:
        portfolio_data[row_id][piece_id]['name'] = text

sorted_portfolio = []

for row_key in portfolio_data:
    row_data = portfolio_data[row_key]
    new_format = {'row_id': row_key, 'items': []}

    for item_key in row_data:
        old_piece = row_data[item_key]
        url_friendly_name = old_piece['name'].strip()
        url_friendly_name = url_friendly_name.replace(' ', '-')

        piece = {
            'piece_id': item_key,
            'description': old_piece['description'],
            'name': url_friendly_name,
            'urls': old_piece['urls']
        }

        piece['urls'] = sorted(piece['urls'])
        new_format['items'].append(piece)

    new_format['items'] = sorted(
        new_format['items'], key=lambda item: item['piece_id'])
    sorted_portfolio.append(new_format)

sorted_portfolio = sorted(sorted_portfolio, key=lambda row: row['row_id'])

with open('portfolio_data.json', 'w') as portfolio_file:
    json.dump(sorted_portfolio, portfolio_file)

pprint.pprint(sorted_portfolio)
