#!D:\PyProject\Web_front_end_study\venv\Scripts\python.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'gearbox==0.2.0','console_scripts','gearbox'
__requires__ = 'gearbox==0.2.0'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('gearbox==0.2.0', 'console_scripts', 'gearbox')()
    )
