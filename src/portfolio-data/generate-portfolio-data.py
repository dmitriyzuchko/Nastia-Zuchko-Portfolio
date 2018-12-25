import glob
import json
import pprint

sub_path = '../../public/'
images = glob.glob(sub_path + 'portfolio-pieces/**/*.jpg', recursive=True)
text_files = glob.glob(sub_path + 'portfolio-pieces/**/*.txt')

portfolio_data = {}

for image in images:
    seperated_path = image.split('/')
    row_id = seperated_path[4]

    piece_id = seperated_path[5].split('.')[0]
    
    if row_id not in portfolio_data:
        portfolio_data[row_id] = {}
    
    if piece_id not in portfolio_data[row_id]:
        portfolio_data[row_id][piece_id] = {'urls': []}
    
    portfolio_data[row_id][piece_id]['urls'].append(image[len(sub_path):])

for text_file in text_files: 
    seperated_path = text_file.split('/')
    row_id = seperated_path[4]
    id_and_description = seperated_path[5].split('.')[0]
    piece_id = id_and_description.split('-')[0]
    description = id_and_description.split('-')[1]

    with open(text_file, 'r') as text_data:
        text = text_data.read()
    
    portfolio_data[row_id][piece_id][description] = text

sorted_portfolio = []

for row_key in portfolio_data:
    row_data = portfolio_data[row_key]
    new_format = {'row_id': row_key, 'items': []}

    for item_key in row_data:
        old_piece = row_data[item_key]
        piece = {
            'piece_id': item_key,
            'description': old_piece['description'],
            'name': old_piece['name'],
            'urls': old_piece['urls']
            }

        piece['urls'] = sorted(piece['urls'])
        new_format['items'].append(piece)

    new_format['items'] = sorted(new_format['items'], key=lambda item: item['piece_id'])
    sorted_portfolio.append(new_format)    

sorted_portfolio = sorted(sorted_portfolio, key=lambda row: row['row_id'])

with open('portfolio_data.json', 'w') as portfolio_file:
    json.dump(sorted_portfolio, portfolio_file)
