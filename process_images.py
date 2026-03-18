import os
import tempfile
os.environ["NUMBA_CACHE_DIR"] = tempfile.gettempdir()
from rembg import remove

def process_image(input_path, output_paths):
    try:
        if not os.path.exists(input_path):
            print(f"Skipping {input_path}, file not found")
            return
        
        with open(input_path, 'rb') as i:
            with open(output_paths[0], 'wb') as o:
                input_data = i.read()
                print(f"Processing {input_path}...")
                output_data = remove(input_data)
                o.write(output_data)
                
        # Copy to other paths if needed
        for out in output_paths[1:]:
            with open(output_paths[0], 'rb') as i:
                with open(out, 'wb') as o:
                    o.write(i.read())
                    
        print(f"Successfully processed {input_path} to {output_paths}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

ramen_in = r"C:\Users\Artdoesit\.gemini\antigravity\brain\1b1c4274-011b-4998-b319-b615ccd13aa8\raw_ramen_1773842392864.png"
momos_in = r"C:\Users\Artdoesit\.gemini\antigravity\brain\1b1c4274-011b-4998-b319-b615ccd13aa8\raw_momos_1773842414360.png"
teriyaki_in = r"C:\Users\Artdoesit\.gemini\antigravity\brain\1b1c4274-011b-4998-b319-b615ccd13aa8\raw_teriyaki_1773842434022.png"

public_dir = r"c:\Users\Artdoesit\OneDrive\Desktop\LIL' China\public"
ramen_out = [os.path.join(public_dir, "hero_ramen.png"), os.path.join(public_dir, "card_ramen.png")]
momos_out = [os.path.join(public_dir, "card_momos.png")]
teriyaki_out = [os.path.join(public_dir, "card_teriyaki.png")]

process_image(ramen_in, ramen_out)
process_image(momos_in, momos_out)
process_image(teriyaki_in, teriyaki_out)
