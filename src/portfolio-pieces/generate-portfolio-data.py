import glob
import json

images = glob.glob('**/*.jpg', recursive=True)
text_files = glob.glob('**/*.txt')

portfolio_data = {}

for image in images:
    seperated_path = image.split('/')
    row_id = seperated_path[0]

    if len(seperated_path) > 2:
        piece_id = seperated_path[1]
    else:
        piece_id = seperated_path[1].split('.')[0]
    
    if row_id not in portfolio_data:
        portfolio_data[row_id] = {}
    
    if piece_id not in portfolio_data[row_id]:
        portfolio_data[row_id][piece_id] = {'urls': []}
    
    portfolio_data[row_id][piece_id]['urls'].append(image)

for text_file in text_files: 
    seperated_path = text_file.split('/')
    row_id = seperated_path[0]
    piece_id = seperated_path[1].split('.')[0]

    with open(text_file, 'r') as text_data:
        text = text_data.read()
    
    portfolio_data[row_id][piece_id]['text'] = text

sorted_portfolio = []

for row_key in portfolio_data:
    row_data = portfolio_data[row_key]
    new_format = {'row_id': row_key, 'items': []}

    for item_key in row_data:
        old_piece = row_data[item_key]
        piece = {'piece_id': item_key, 'text': old_piece['text'], 'urls': old_piece['urls']}

        piece['urls'] = sorted(piece['urls'])
        new_format['items'].append(piece)

    new_format['items'] = sorted(new_format['items'], key=lambda item: item['piece_id'])
    sorted_portfolio.append(new_format)    

sorted_portfolio = sorted(sorted_portfolio, key=lambda row: row['row_id'])

with open('portfolio_data.json', 'w') as portfolio_file:
    json.dump(sorted_portfolio, portfolio_file)
