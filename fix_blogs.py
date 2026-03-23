import os
import re

blogs_dir = "blogs"
count = 0

for filename in os.listdir(blogs_dir):
    if not filename.endswith(".html"):
        continue
    
    filepath = os.path.join(blogs_dir, filename)
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Remove <style>...</style> block completely
    new_content = re.sub(r'<style[\s\S]*?</style>', '', content, flags=re.IGNORECASE)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    
    print(f"✅ Fixed: {filename}")
    count += 1

print(f"\nDone! {count} files fixed.")