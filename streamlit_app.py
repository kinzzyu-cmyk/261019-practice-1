"""동일한 HTML 학습지를 Streamlit에서도 실행하는 진입점."""

from pathlib import Path

import streamlit as st


st.set_page_config(
    page_title="관찰에서 변화로 · 디자인씽킹 워크북",
    page_icon="✳️",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# 학습지 자체의 반응형 레이아웃을 사용하고 Streamlit 바깥 여백만 줄입니다.
st.html("""
<style>
    .stApp { background: #f6f5ee; }
    .stMainBlockContainer { max-width: 1440px; padding: 0 0 2rem; }
    [data-testid="stHeader"] { display: none; }
</style>
""")


def load_workbook() -> str:
    """저장소의 신뢰할 수 있는 정적 파일만 읽어 독립적인 HTML로 묶습니다."""
    root = Path(__file__).resolve().parent
    html = (root / "index.html").read_text(encoding="utf-8")
    css = (root / "style.css").read_text(encoding="utf-8")
    javascript = (root / "script.js").read_text(encoding="utf-8")
    # srcdoc 안에서 상대 경로를 요청하지 않도록 CSS와 JS를 포함합니다.
    return html.replace(
        '<link rel="stylesheet" href="style.css">',
        f"<style>{css}</style>",
        1,
    ).replace(
        '<script src="script.js" defer></script>',
        "",
        1,
    ).replace("</body>", f"<script>{javascript}</script></body>", 1)


try:
    workbook_html = load_workbook()
except (OSError, UnicodeError) as error:
    st.error(f"학습지 파일을 읽지 못했습니다: {error}")
    st.info("index.html, style.css, script.js를 streamlit_app.py와 같은 폴더에 두세요.")
    st.stop()

# iframe에서 기존 JavaScript, localStorage, IndexedDB, 파일 및 인쇄를 사용합니다.
st.iframe(
    workbook_html,
    height="content",
    tab_index=0,
    alt="고등학교 디자인씽킹 8단계 웹 학습지",
)
