'use strict';
(() => {
  const KEY = 'design-lab-workbook-v1';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const el = (tag, cls = '', text) => { const n = document.createElement(tag); n.className = cls; if (text !== undefined) n.textContent = text; return n; };
  const basics = [['project', '프로젝트명', '어떤 변화를 만들어 볼까요?'], ['classroom', '학급', '예: 1학년 3반'], ['group', '모둠명', '우리 모둠 이름'], ['date', '작성일', '', 'date']];
  const steps = [
    { title: '문제 상황 관찰', english: 'OBSERVE', symbol: '◎', description: '당연하게 지나쳤던 일상을 자세히 들여다보세요. 사실과 나의 해석을 구분하는 것이 문제 발견의 시작입니다.', help: '누가, 언제, 어디에서 불편을 겪나요? 직접 보고 들은 것과 내가 추측한 것은 어떻게 다른가요?', example: '상황: 점심시간, 급식실 퇴식구 앞\n관찰 사실: 5분 동안 학생 8명이 식판을 들고 되돌아갔다.\n해석: 반납 위치를 찾기 어려운 것 같다. 아직 인터뷰로 확인하지 않았다.', fields: [
      ['place', '관찰 장소와 상황', '언제, 어디에서, 누가 무엇을 하고 있었나요?'],
      ['discomfort', '발견한 불편', '누구에게 어떤 어려움이 있었나요?'],
      ['observedFacts', '실제로 관찰한 사실', '직접 보고 들은 행동, 횟수, 시간 등을 적으세요.', '직접 관찰'],
      ['interpretation', '나의 해석 또는 추측', '확인되지 않은 내용은 나의 생각이나 추측으로 구분해요.', '추측']
    ] },
    { title: '사용자 공감', english: 'EMPATHIZE', symbol: '“', description: '나의 시선에서 잠시 벗어나 사용자의 이야기를 들어보세요. 말과 행동, 그 뒤에 숨은 필요에 주목합니다.', help: '“왜 불편하세요?” 대신 “최근에 불편했던 순간을 들려주세요”라고 물어보면 어떨까요?', example: '질문: 식판을 반납할 때 가장 헷갈렸던 순간은 언제였나요?\n답변: 처음 왔을 때 어디에 놓는지 몰라 친구를 따라갔어요.\n필요: 처음 온 사람도 반납 위치를 쉽게 알 수 있는 안내.', fields: [
      ['user', '핵심 사용자', '이 문제를 가장 자주, 크게 겪는 사람을 구체적으로 적으세요.'],
      ['userWords', '사용자가 한 말', '사용자의 표현을 가능한 그대로 기록하세요.'],
      ['behaviorEmotion', '사용자의 행동과 감정', '어떤 행동과 감정을 보였나요? 감정을 해석한 근거도 적으세요.'],
      ['needs', '사용자가 필요로 하는 것', '특정 제품보다 사용자가 이루고 싶은 일을 생각해 보세요.']
    ] },
    { title: '원인 탐구', english: 'INVESTIGATE', symbol: '?', description: '눈앞의 현상에서 한 걸음 더 들어가 원인을 탐구합니다. 조사로 확인한 사실이 문제 정의의 근거가 됩니다.', help: '왜 이런 일이 생길까요? 내 추측을 확인하거나 반박하려면 누구에게 무엇을 조사해야 할까요?', example: '추정 원인: 안내판이 이동 동선에서 보이지 않는다.\n조사 질문: 퇴식구 입구에서 안내 글자가 보이는가?\n결과와 출처: 입구 3곳에서 직접 촬영·관찰, 10월 19일. 2곳에서는 안내판이 가려졌다.\n미확인 추측: 글자가 작아 읽기 어려울 수도 있다.', fields: [
      ['causes', '문제가 발생하는 원인', '여러 원인을 생각하고, 아직 가설인 부분을 표시하세요.'],
      ['researchQuestions', '이를 확인하기 위한 조사 질문', '원인을 확인하기 위해 무엇을 알아봐야 하나요?'],
      ['researchSources', '조사 결과와 자료 출처', '결과와 함께 조사 일시·방법, 인터뷰 대상 또는 자료 제목·URL을 적으세요.'],
      ['confirmed', '확인한 사실', '어떤 자료나 관찰로 확인했는지 연결해 적으세요.', '근거 확인'],
      ['unconfirmed', '아직 확인하지 못한 추측', '추가로 확인할 내용과 확인 방법을 적으세요.', '추가 조사']
    ] },
    { title: '탐구 문제 정의', english: 'DEFINE', symbol: '↗', description: '관찰과 공감, 조사 내용을 하나의 문제로 연결하세요. 좋은 탐구 질문은 여러 해결 가능성을 열어 둡니다.', help: '누구의 어떤 필요를 해결하려고 하나요? 질문에 특정 제품이나 해결 방법이 이미 들어가 있지는 않나요?', example: '문제 정의: 신입생은 급식 후 식판을 반납하는 상황에서 위치를 찾기 어렵다. 그 이유는 입구 3곳 중 2곳에서 안내판이 가려졌기 때문이며, 처음 와도 동선을 쉽게 파악할 필요가 있다.\n탐구 질문: 어떻게 하면 처음 급식실에 온 학생이 반납 동선을 쉽게 파악할 수 있을까?', fields: [
      ['problem', '근거를 담은 문제 정의', '[사용자]는 [상황]에서 [어려움]을 겪는다. 그 이유는 [관찰·조사 근거]이며, [필요]를 충족할 필요가 있다.'],
      ['inquiry', '“어떻게 하면 ~할 수 있을까?” 탐구 질문', '사용자와 필요를 중심으로, 다양한 해결 방법이 나올 수 있는 질문을 쓰세요.']
    ] },
    { title: '해결 아이디어 발산', english: 'IDEATE', symbol: '✳', description: '다른 방향의 아이디어를 3개 이상 펼쳐 보세요. 지금은 완벽한 답보다 가능성을 넓히는 시간입니다.', help: '공간, 도구, 안내, 서비스, 행동 규칙 등 서로 다른 방식으로 바꿔 보면 어떨까요?', example: '아이디어명: 발걸음 안내선\n설명: 바닥에 반납 위치까지 이어지는 선을 표시한다.\n도움: 안내판을 찾지 않아도 방향을 알 수 있다.\n한계: 사람이 많으면 선이 가려질 수 있다.', fields: [] },
    { title: '해결방안 선정', english: 'DECIDE', symbol: '✓', description: '아이디어를 같은 기준으로 비교하고, 근거를 바탕으로 선택하세요. 총점은 판단을 돕는 자료이며 선택은 여러분의 몫입니다.', help: '사용자의 필요에 맞나요? 우리에게 있는 시간과 재료로 만들 수 있나요? 어떤 변화를 기대할 수 있나요?', example: '선정 근거: 발걸음 안내선은 설치가 간단하고 처음 온 학생도 따라갈 수 있어 선택했다. 다만 혼잡할 때 보이지 않는 한계를 작은 모형으로 먼저 검증하기로 했다.', fields: [['selectionReason', '선정 근거', '점수, 사용자 필요, 조사 근거, 예상 한계를 함께 고려하여 선택 이유를 적으세요.']] },
    { title: '해결방안 구체화', english: 'PROTOTYPE & TEST', symbol: '⤴', description: '아이디어를 실행 가능한 계획으로 구체화하세요. 무엇을 만들고, 누구에게 확인하며, 어떤 변화로 효과를 판단할지 정합니다.', help: '어떤 원인을 어떻게 줄이나요? 검증 전의 예상과 검증 후의 결과를 구분했나요? 성공했다고 판단할 기준은 무엇인가요?', example: '개선 원인: 입구에서 안내가 보이지 않는 문제를 바닥 안내로 보완한다.\n피드백: 급식실을 처음 이용하는 학생 5명에게 모형 동선을 따라가게 하고 인터뷰한다.\n성공 기준: 5명 중 4명이 도움 없이 20초 안에 반납 위치를 찾는다.\n예상 효과: 되돌아가는 행동이 줄어들 것이다. 실제 결과는 검증 후 기록한다.', fields: [
      ['solutionName', '해결방안 이름', '선정한 아이디어를 발전시킨 이름을 적으세요.'],
      ['solutionDescription', '해결방안 설명', '누가, 언제, 어디에서, 어떻게 사용하는지 설명하세요.'],
      ['causeImprovement', '어떤 원인을 어떻게 개선하나요?', '3단계에서 찾은 원인과 개선 방법을 연결해 보세요.'],
      ['materials', '준비물', '재료, 도구, 필요한 협조와 자원을 적으세요.'],
      ['sequence', '실행 순서', '만들기부터 적용까지 순서대로 적으세요.'],
      ['difficulties', '예상 어려움', '실행할 때 생길 어려움과 대응 방법을 적으세요.'],
      ['feedback', '누구에게 어떤 방식으로 피드백받을까요?', '대상, 인원, 시기, 질문 또는 관찰 방법을 구체적으로 적으세요.'],
      ['successCriteria', '효과를 판단할 관찰 항목이나 성공 기준', '시간, 횟수, 행동 변화 등 확인 가능한 기준을 정하세요.'],
      ['expectedEffect', '검증 전 예상 효과', '어떤 변화가 생길 것으로 예상하나요?', '검증 전'],
      ['actualResult', '실제 검증 결과', '검증했다면 실제 관찰 결과와 성공 기준의 충족 여부를 적으세요.', '선택 · 검증 후']
    ] },
    { title: '성찰', english: 'REFLECT', symbol: '↺', description: '생각이 달라진 순간을 돌아보세요. 결과만큼이나 근거를 따라 생각을 수정한 과정이 중요합니다.', help: '처음의 예상과 달랐던 것은 무엇인가요? 어떤 근거로 생각을 고쳤나요? 한 번 더 시도한다면 무엇을 바꾸고 싶나요?', example: '처음에는 안내판을 크게 만들면 된다고 생각했다. 하지만 동선 관찰에서 안내판이 가려지는 위치가 더 중요하다는 점을 알았다. 다음에는 혼잡한 상황에서도 안내가 보이는지 확인하고 싶다.', fields: [
      ['changed', '처음 생각에서 달라진 점', '사용자나 문제를 바라보는 시선이 어떻게 달라졌나요?'],
      ['revised', '근거를 바탕으로 수정한 점', '어떤 관찰·인터뷰·조사 결과를 근거로 무엇을 고쳤나요?'],
      ['nextQuestions', '남은 의문과 다음 개선 과제', '다음 탐구에서 더 확인하거나 개선할 내용을 적으세요.']
    ] }
  ];
  const ideaFields = [['name', '아이디어명', '아이디어를 한 문장으로 이름 붙여 보세요.'], ['description', '설명', '어떤 방식으로 문제를 해결하나요?'], ['benefit', '사용자에게 주는 도움', '사용자의 어떤 필요를 충족하나요?'], ['limit', '예상 한계', '잘 작동하지 않을 수 있는 상황은 무엇인가요?']];
  const checkLabels = ['사용자와 상황이 구체적이며, 질문의 범위가 우리 모둠이 탐구할 만큼 적절하다.', '특정 제품이나 해결책을 미리 정하지 않고 다양한 가능성을 열어 두었다.', '문제 정의에 관찰·인터뷰·조사에서 얻은 근거가 들어 있다.'];
  const uid = () => globalThis.crypto?.randomUUID?.() || `id-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const newIdea = () => ({ id: uid(), name: '', description: '', benefit: '', limit: '', scores: [0, 0, 0] });
  const fresh = () => ({ version: 1, basic: Object.fromEntries(basics.map(([id]) => [id, ''])), fields: Object.fromEntries(steps.flatMap(s => s.fields).map(([id]) => [id, ''])), interviews: [{ id: uid(), question: '', answer: '' }], ideas: [newIdea(), newIdea(), newIdea()], checks: [false, false, false], selectedId: '', currentStep: 0 });
  let state = fresh(), sketch = null, dbPromise, noticeTimer, busy = false, saveFailed = false, imageReadFailed = false, imageSaveFailed = false;
  let imageQueue = Promise.resolve();
  function notify(message, error = false) {
    const n = $('#notice'); n.textContent = message; n.classList.toggle('error', error); n.setAttribute('role', error ? 'alert' : 'status'); n.hidden = false;
    clearTimeout(noticeTimer); noticeTimer = setTimeout(() => { n.hidden = true; }, error ? 15000 : 6500);
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); saveFailed = false; $('#save-status').textContent = imageSaveFailed ? '이미지 저장 실패 · JSON 백업 필요' : '✓ 텍스트 자동 저장됨 · 이 브라우저'; return true; }
    catch (e) { saveFailed = true; $('#save-status').textContent = '저장 실패 · JSON 백업 필요'; notify('자동 저장에 실패했습니다. 저장 공간·브라우저 설정을 확인하고 JSON으로 내보내 보관하세요.', true); return false; }
  }
  function openDB() {
    if (!dbPromise) dbPromise = new Promise((resolve, reject) => {
      if (!globalThis.indexedDB) { reject(new Error('이미지 저장소를 사용할 수 없습니다.')); return; }
      const req = indexedDB.open('design-lab-images-v1', 1);
      req.onupgradeneeded = () => req.result.createObjectStore('images');
      req.onerror = () => reject(req.error); req.onblocked = () => reject(new Error('다른 탭이 이미지 저장소를 사용 중입니다.'));
      req.onsuccess = () => resolve(req.result);
    }).catch(e => { dbPromise = undefined; throw e; });
    return dbPromise;
  }
  async function imageStore(action, value) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('images', action === 'get' ? 'readonly' : 'readwrite'), store = tx.objectStore('images');
      const req = action === 'get' ? store.get('sketch') : value ? store.put(value, 'sketch') : store.delete('sketch');
      tx.oncomplete = () => resolve(req.result || null); tx.onerror = () => reject(tx.error); tx.onabort = () => reject(tx.error || new Error('저장이 취소되었습니다.'));
    });
  }
  const filled = v => typeof v === 'string' && v.trim().length > 0;
  function metrics(index) {
    const entries = steps[index].fields.filter(([id]) => id !== 'actualResult').map(([id, label]) => [label, filled(state.fields[id])]);
    if (index === 1) entries.push(['인터뷰 질문과 답변', state.interviews.some(i => filled(i.question) && filled(i.answer))]);
    if (index === 3) checkLabels.forEach((_, i) => entries.push([`자기 점검 ${i + 1}`, state.checks[i]]));
    if (index === 4) for (let i = 0; i < Math.max(3, state.ideas.length); i++) ideaFields.forEach(([id, label]) => entries.push([`아이디어 ${i + 1} ${label}`, filled(state.ideas[i]?.[id])]));
    if (index === 5) {
      state.ideas.forEach((idea, i) => ['사용자 적합성', '실현 가능성', '기대 효과'].forEach((label, j) => entries.push([`${idea.name.trim() || `아이디어 ${i + 1}`} ${label}`, idea.scores[j] > 0])));
      entries.push(['최종 아이디어 선택', Boolean(state.selectedId)]);
    }
    return { done: entries.filter(e => e[1]).length, total: entries.length, missing: entries.filter(e => !e[1]).map(e => e[0]) };
  }
  function updateProgress() {
    const all = steps.map((_, i) => metrics(i)), done = all.reduce((a, m) => a + m.done, 0) + basics.filter(([id]) => filled(state.basic[id])).length, total = all.reduce((a, m) => a + m.total, 0) + basics.length;
    const percent = Math.round(done / total * 100); $('#progress').value = percent; $('#progress-text').textContent = `${percent}%`;
    $('#progress-detail').textContent = `${done} / ${total} 항목 작성 · 이미지·검증 결과는 선택`;
    const m = all[state.currentStep]; $('#step-summary').textContent = m.missing.length ? `이 단계 ${m.done}/${m.total} 작성 · 자유롭게 이동할 수 있어요` : '이 단계의 모든 항목을 작성했어요';
    $$('.step-link').forEach((n, i) => { $('.step-state', n).textContent = all[i].done === all[i].total ? '✓' : `${all[i].done}/${all[i].total}`; n.setAttribute('aria-label', `${i + 1}단계 ${steps[i].title}, ${all[i].done}/${all[i].total} 작성`); });
  }
  function field(parent, id, label, hint, value, change, type = 'textarea', tag = '') {
    const wrap = el('div', 'field'), lab = el('label', '', label); lab.htmlFor = id; if (tag) lab.append(el('span', 'tag', tag)); wrap.append(lab);
    const input = el(type === 'textarea' ? 'textarea' : 'input'); input.id = id; if (type !== 'textarea') input.type = type;
    if (hint) { if (type === 'textarea') { const h = el('span', 'hint', hint); h.id = `${id}-hint`; wrap.append(h); input.setAttribute('aria-describedby', h.id); } else input.placeholder = hint; }
    input.value = value; input.addEventListener('input', () => { change(input.value); save(); updateProgress(); }); wrap.append(input); parent.append(wrap); return input;
  }
  function renderBasics() { $('#basic-fields').replaceChildren(); basics.forEach(([id, label, hint, type]) => field($('#basic-fields'), id, label, hint, state.basic[id], v => { state.basic[id] = v; }, type || 'text')); }
  function renderNavigation() {
    $('#step-nav').replaceChildren(); steps.forEach((s, i) => { const b = el('button', 'step-link'); b.type = 'button'; b.append(el('span', 'step-number', String(i + 1).padStart(2, '0')), el('span', '', s.title), el('span', 'step-state')); b.addEventListener('click', () => goTo(i)); $('#step-nav').append(b); });
  }
  function renderStage(focus = false) {
    const index = state.currentStep, s = steps[index], stage = $('#stage'); stage.replaceChildren();
    const header = el('div', 'stage-header'), text = el('div'), heading = el('h2', '', s.title); heading.id = 'stage-title'; heading.tabIndex = -1;
    text.append(el('p', 'eyebrow', `0${index + 1} — ${s.english}`), heading, el('p', 'stage-description', s.description));
    const art = el('div', 'stage-art', s.symbol); art.setAttribute('aria-hidden', 'true'); header.append(text, art);
    const help = el('div', 'help-box'); help.append(el('strong', '', '생각을 여는 질문'), el('span', '', s.help));
    const example = el('details', 'example'); example.append(el('summary', '', '막막할 때, 예시 살펴보기'), el('p', '', s.example), el('small', '', '예시는 참고용입니다. 우리 모둠이 직접 발견한 내용으로 작성하세요.')); stage.append(header, help, example);
    if (index === 4) renderIdeas(stage);
    else {
      const card = el('section', 'form-card'); stage.append(card); if (index === 5) renderComparison(card);
      s.fields.forEach(([id, label, hint, tag], i) => { field(card, id, label, hint, state.fields[id], v => { state.fields[id] = v; }, 'textarea', tag); if (index === 1 && i === 0) renderInterviews(card); if (index === 6 && i === 2) renderImage(card); });
      if (index === 3) {
        card.append(el('h3', '', '질문을 다듬는 자기 점검')); const list = el('div', 'checklist');
        checkLabels.forEach((label, i) => { const lab = el('label'), input = el('input'); input.type = 'checkbox'; input.checked = state.checks[i]; input.addEventListener('change', () => { state.checks[i] = input.checked; save(); updateProgress(); }); lab.append(input, document.createTextNode(label)); list.append(lab); }); card.append(list);
      }
    }
    $$('.step-link').forEach((n, i) => { n.classList.toggle('active', index === i); if (index === i) n.setAttribute('aria-current', 'step'); else n.removeAttribute('aria-current'); });
    $('#step-counter').textContent = `STEP 0${index + 1} / 08`; $('#previous-btn').disabled = index === 0; $('#next-btn').disabled = index === 7; updateProgress(); if (focus) heading.focus({ preventScroll: true });
  }
  function goTo(index) {
    if (busy || index < 0 || index > 7 || index === state.currentStep) return;
    const missing = metrics(state.currentStep).missing; state.currentStep = index; save(); renderStage(true); $('#stage').scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (missing.length) notify(`이전 단계에 미작성 ${missing.length}개: ${missing.slice(0, 3).join(', ')}${missing.length > 3 ? ' 외' : ''}. 언제든 돌아와 작성할 수 있어요.`);
  }
  function renderInterviews(parent) {
    const region = el('section'); region.append(el('h3', '', '사용자 인터뷰 기록'));
    state.interviews.forEach((item, i) => {
      const card = el('div', 'form-card'), top = el('div', 'card-top'), remove = el('button', 'delete-button', '기록 삭제'); remove.type = 'button'; remove.setAttribute('aria-label', `인터뷰 ${i + 1} 삭제`);
      remove.addEventListener('click', () => { if ((filled(item.question) || filled(item.answer)) && !confirm('이 인터뷰 기록을 삭제할까요?')) return; state.interviews = state.interviews.filter(x => x.id !== item.id); save(); renderStage(); $('#add-interview').focus(); });
      top.append(el('h3', '', `인터뷰 ${String(i + 1).padStart(2, '0')}`), remove); card.append(top);
      field(card, `${item.id}-question`, '인터뷰 질문', '유도하지 않는 열린 질문을 적어 보세요.', item.question, v => { item.question = v; });
      field(card, `${item.id}-answer`, '사용자의 답변', '대상은 이름 대신 역할이나 별칭으로 기록해도 좋아요.', item.answer, v => { item.answer = v; }); region.append(card);
    });
    const add = el('button', 'add-button', '+ 인터뷰 질문과 답변 추가'); add.id = 'add-interview'; add.type = 'button';
    add.addEventListener('click', () => { if (state.interviews.length >= 100) return notify('인터뷰는 최대 100개까지 기록할 수 있습니다.'); const item = { id: uid(), question: '', answer: '' }; state.interviews.push(item); save(); renderStage(); document.getElementById(`${item.id}-question`).focus(); }); region.append(add); parent.append(region);
  }
  function renderIdeas(parent) {
    parent.append(el('p', 'small-note', '서로 다른 아이디어를 3개 이상 작성해 보세요. 카드를 삭제해도 단계 이동은 가능합니다.'));
    state.ideas.forEach((idea, i) => {
      const card = el('section', 'form-card'), top = el('div', 'card-top'), remove = el('button', 'delete-button', '카드 삭제'); remove.type = 'button'; remove.setAttribute('aria-label', `아이디어 ${i + 1} 삭제`);
      remove.addEventListener('click', () => { if ((ideaFields.some(([id]) => filled(idea[id])) || idea.scores.some(Boolean) || state.selectedId === idea.id) && !confirm('이 아이디어와 평가 점수를 삭제할까요?')) return; state.ideas = state.ideas.filter(x => x.id !== idea.id); if (state.selectedId === idea.id) state.selectedId = ''; save(); renderStage(); $('#add-idea').focus(); });
      top.append(el('h3', '', `IDEA ${String(i + 1).padStart(2, '0')}`), remove); card.append(top);
      ideaFields.forEach(([id, label, hint]) => field(card, `${idea.id}-${id}`, label, hint, idea[id], v => { idea[id] = v; }, id === 'name' ? 'text' : 'textarea')); parent.append(card);
    });
    const add = el('button', 'add-button', '+ 새로운 아이디어 카드 추가'); add.id = 'add-idea'; add.type = 'button';
    add.addEventListener('click', () => { if (state.ideas.length >= 100) return notify('아이디어는 최대 100개까지 기록할 수 있습니다.'); const idea = newIdea(); state.ideas.push(idea); save(); renderStage(); document.getElementById(`${idea.id}-name`).focus(); }); parent.append(add);
  }
  function renderComparison(parent) {
    parent.append(el('h3', '', '아이디어 비교표'), el('p', 'small-note', '각 기준은 1점(낮음)~5점(높음)으로 평가하세요. ‘미평가’는 0점으로 합산됩니다. 최고점 아이디어가 자동 선택되지는 않습니다.'));
    const scroll = el('div', 'table-wrap'), table = el('table'), head = el('thead'), tr = el('tr'); table.append(el('caption', 'visually-hidden', '아이디어별 평가 점수와 총점'));
    ['아이디어', '사용자 적합성', '실현 가능성', '기대 효과', '총점'].forEach(label => { const th = el('th', '', label); th.scope = 'col'; tr.append(th); }); head.append(tr); table.append(head);
    const body = el('tbody'); state.ideas.forEach((idea, i) => {
      const row = el('tr'), name = idea.name.trim() || `아이디어 ${i + 1} (이름 미작성)`, th = el('th', '', name), total = el('td', 'score-total', `${idea.scores.reduce((a, b) => a + b, 0)} / 15`); th.scope = 'row'; row.append(th);
      ['사용자 적합성', '실현 가능성', '기대 효과'].forEach((label, j) => {
        const td = el('td'), select = el('select'); select.setAttribute('aria-label', `${name} ${label} 점수`);
        for (let score = 0; score <= 5; score++) { const option = el('option', '', score ? `${score}점` : '미평가'); option.value = String(score); select.append(option); }
        select.value = String(idea.scores[j]); select.addEventListener('change', () => { idea.scores[j] = Number(select.value); total.textContent = `${idea.scores.reduce((a, b) => a + b, 0)} / 15`; save(); updateProgress(); }); td.append(select); row.append(td);
      }); row.append(total); body.append(row);
    }); table.append(body); scroll.append(table); parent.append(scroll);
    if (!state.ideas.length) parent.append(el('p', 'small-note', '5단계에서 아이디어를 추가하면 비교표가 생성됩니다.'));
    const group = el('fieldset'); group.style.cssText = 'border:0;padding:0;margin:0 0 24px'; group.append(el('legend', '', '최종 선택 · 우리 모둠이 직접 결정해요'));
    state.ideas.forEach((idea, i) => { const lab = el('label', 'selection-option'), radio = el('input'); radio.type = 'radio'; radio.name = 'selected-idea'; radio.value = idea.id; radio.checked = state.selectedId === idea.id; radio.addEventListener('change', () => { state.selectedId = idea.id; save(); updateProgress(); }); lab.append(radio, document.createTextNode(idea.name.trim() || `아이디어 ${i + 1} (이름 미작성)`)); group.append(lab); }); parent.append(group);
  }
  const validImage = data => data === null || (typeof data === 'string' && data.length <= 15 * 1024 * 1024 && /^data:image\/(png|jpeg|webp|gif);base64,[A-Za-z0-9+/]+={0,2}$/.test(data));
  async function decodeImage(data) { if (data !== null) await new Promise((resolve, reject) => { const image = new Image(); image.onload = resolve; image.onerror = () => reject(new Error('읽을 수 없는 이미지입니다.')); image.src = data; }); }
  function queueImage(action) { imageQueue = imageQueue.then(action).then(() => { imageSaveFailed = false; }).catch(e => { imageSaveFailed = true; notify(`이미지 저장 실패: ${e.message} JSON으로 내보내 보관하세요.`, true); $('#save-status').textContent = '이미지 저장 실패 · JSON 백업 필요'; }); }
  function renderImage(parent) {
    const box = el('div', 'image-upload'), lab = el('label', '', '스케치 이미지 첨부 (선택)'), input = el('input'), hint = el('small', '', 'PNG, JPG, WebP, GIF · 최대 10MB · 이 브라우저에 이미지도 저장됩니다.');
    lab.htmlFor = 'sketch-file'; input.type = 'file'; input.id = 'sketch-file'; input.accept = 'image/png,image/jpeg,image/webp,image/gif'; hint.id = 'image-hint'; input.setAttribute('aria-describedby', hint.id); box.append(lab, input, hint);
    if (sketch) { const image = el('img', 'sketch'), remove = el('button', '', '이미지 삭제'); image.src = sketch; image.alt = '우리 모둠의 해결방안 스케치'; remove.type = 'button'; remove.addEventListener('click', () => queueImage(async () => { await imageStore('put', null); sketch = null; imageReadFailed = false; if (state.currentStep === 6) renderStage(); notify('스케치 이미지를 삭제했습니다.'); })); box.append(image, remove); }
    input.addEventListener('change', () => {
      const file = input.files[0]; if (!file) return;
      if (file.size > 10 * 1024 * 1024 || !['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type)) { notify('10MB 이하의 PNG, JPG, WebP, GIF 이미지를 선택하세요.', true); input.value = ''; return; }
      queueImage(async () => {
        const data = await new Promise((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(r.result); r.onerror = () => reject(new Error('파일 읽기 실패')); r.readAsDataURL(file); });
        if (!validImage(data)) throw new Error('지원하지 않는 이미지 형식입니다.'); await decodeImage(data);
        sketch = data; imageReadFailed = false; if (state.currentStep === 6) renderStage();
        await imageStore('put', data); imageReadFailed = false; notify('스케치 이미지를 저장했습니다.');
      });
    }); parent.append(box);
  }
  function validate(raw) {
    const fail = () => { throw new Error('학습지 JSON의 형식이나 값이 올바르지 않습니다.'); };
    if (!raw || raw.version !== 1 || !raw.basic || !raw.fields) fail(); const clean = fresh();
    const str = v => { if (typeof v !== 'string' || v.length > 200000) fail(); return v; };
    basics.forEach(([id]) => { clean.basic[id] = str(raw.basic[id]); }); steps.flatMap(s => s.fields).forEach(([id]) => { clean.fields[id] = str(raw.fields[id]); });
    if (clean.basic.date !== '' && !/^\d{4}-\d{2}-\d{2}$/.test(clean.basic.date)) fail();
    if (!Array.isArray(raw.interviews) || raw.interviews.length > 100 || !Array.isArray(raw.ideas) || raw.ideas.length > 100) fail();
    const ids = new Set(), checkId = id => { if (typeof id !== 'string' || !/^[a-zA-Z0-9_-]{1,100}$/.test(id) || ids.has(id)) fail(); ids.add(id); return id; };
    clean.interviews = raw.interviews.map(i => ({ id: checkId(i.id), question: str(i.question), answer: str(i.answer) }));
    clean.ideas = raw.ideas.map(i => { if (!Array.isArray(i.scores) || i.scores.length !== 3 || !i.scores.every(v => Number.isInteger(v) && v >= 0 && v <= 5)) fail(); return { id: checkId(i.id), name: str(i.name), description: str(i.description), benefit: str(i.benefit), limit: str(i.limit), scores: [...i.scores] }; });
    if (!Array.isArray(raw.checks) || raw.checks.length !== 3 || !raw.checks.every(v => typeof v === 'boolean')) fail(); clean.checks = [...raw.checks]; clean.selectedId = str(raw.selectedId);
    if (clean.selectedId && !clean.ideas.some(i => i.id === clean.selectedId)) fail(); if (!Number.isInteger(raw.currentStep) || raw.currentStep < 0 || raw.currentStep > 7) fail(); clean.currentStep = raw.currentStep;
    if (Object.hasOwn(raw, 'sketch') && !validImage(raw.sketch)) fail(); return clean;
  }
  function setBusy(value) { busy = value; $('.workspace').inert = value; $('.toolbar').inert = value; $('#save-status').textContent = value ? '파일 처리 중…' : saveFailed || imageSaveFailed ? '저장 실패 · JSON 백업 필요' : imageReadFailed ? '이미지 복원 실패 · 저장 설정 확인' : '✓ 텍스트 자동 저장됨 · 이 브라우저'; }
  async function exportJSON() {
    setBusy(true);
    try {
      await imageQueue; if (imageReadFailed) { sketch = await imageStore('get'); imageReadFailed = false; }
      const blob = new Blob([JSON.stringify({ ...state, sketch, exportedAt: new Date().toISOString() }, null, 2)], { type: 'application/json' }), url = URL.createObjectURL(blob), a = el('a');
      a.href = url; a.download = `${(state.basic.project.trim() || '디자인씽킹-학습지').replace(/[\\/:*?"<>|\x00-\x1f]/g, '-').slice(0, 80)}.json`; document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 5000); notify('텍스트·선택값·스케치 이미지를 담은 JSON 파일을 내보냈습니다.');
    } catch (e) { notify(`내보내기 실패: ${e.message}`, true); } finally { setBusy(false); }
  }
  async function importJSON(file) {
    if (!file) return; setBusy(true);
    try {
      if (file.size > 25 * 1024 * 1024) throw new Error('25MB 이하의 JSON 파일을 선택하세요.');
      const raw = JSON.parse(await file.text()), next = validate(raw), nextSketch = raw.sketch ?? null; await decodeImage(nextSketch);
      if (!confirm('현재 학습지를 이 파일의 내용으로 바꿀까요? 필요한 내용은 먼저 내보내기로 보관하세요.')) return;
      await imageQueue; const previousSketch = await imageStore('get'); await imageStore('put', nextSketch);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch (e) { await imageStore('put', previousSketch); throw new Error('텍스트 저장에 실패하여 불러오기를 취소했습니다.'); }
      state = next; sketch = nextSketch; imageReadFailed = false; imageSaveFailed = false; saveFailed = false; renderBasics(); renderStage(); notify('학습지와 스케치 이미지를 불러와 저장했습니다.');
    } catch (e) { notify(`불러오기 실패: ${e.message} 기존 화면 내용은 유지됩니다.`, true); } finally { $('#import-file').value = ''; setBusy(false); }
  }
  async function resetAll() {
    if (!confirm('모든 답변, 점수, 인터뷰, 스케치 이미지를 초기화할까요? 되돌릴 수 없습니다. 필요한 내용은 JSON으로 먼저 보관하세요.')) return; setBusy(true);
    try {
      await imageQueue; const previousSketch = await imageStore('get'); await imageStore('put', null);
      try { localStorage.removeItem(KEY); } catch (e) { await imageStore('put', previousSketch); throw e; }
      state = fresh(); sketch = null; imageReadFailed = false; imageSaveFailed = false; saveFailed = false; renderBasics(); renderStage(); notify('학습지를 초기화했습니다.');
    } catch (e) { notify(`초기화하지 못했습니다. 브라우저 저장 설정을 확인하세요. (${e.message})`, true); } finally { setBusy(false); }
  }
  function printField(parent, label, value, blank) { const f = el('div', 'print-field'); f.append(el('h4', '', label), el('div', 'print-answer', blank ? '' : value || '미작성')); parent.append(f); }
  function buildPrint(blank) {
    const root = $('#print-root'), data = blank ? fresh() : state; root.replaceChildren(); root.className = blank ? 'print-blank' : '';
    root.append(el('h1', '', '관찰에서 변화로 · 디자인씽킹 학습지'), el('p', 'print-note', blank ? '빈 학습지 · 관찰과 근거를 바탕으로 우리 모둠의 생각을 기록하세요.' : '작성본 · 실제 검증 결과와 스케치 이미지는 선택 항목입니다.'));
    const meta = el('div', 'print-meta'); basics.forEach(([id, label]) => meta.append(el('div', '', `${label}: ${blank ? '____________________' : data.basic[id] || '미작성'}`))); root.append(meta);
    steps.forEach((s, index) => {
      const section = el('section'); section.append(el('h2', '', `${index + 1}. ${s.title}`), el('p', 'print-description', s.description), el('p', 'print-description', `도움 질문: ${s.help}`));
      if (index === 4) data.ideas.forEach((idea, i) => { section.append(el('h3', '', `아이디어 ${i + 1}`)); ideaFields.forEach(([id, label]) => printField(section, label, idea[id], blank)); });
      else {
        if (index === 5) {
          const table = el('table'), head = el('thead'), row = el('tr'); ['아이디어', '사용자 적합성', '실현 가능성', '기대 효과', '총점'].forEach(label => row.append(el('th', '', label))); head.append(row); table.append(head); const body = el('tbody');
          data.ideas.forEach((idea, i) => { const tr = el('tr'); tr.append(el('td', '', blank ? `아이디어 ${i + 1}` : idea.name || `아이디어 ${i + 1}`)); idea.scores.forEach(v => tr.append(el('td', '', blank ? '　 / 5' : v ? `${v} / 5` : '미평가'))); tr.append(el('td', '', blank ? '　 / 15' : `${idea.scores.reduce((a, b) => a + b, 0)} / 15`)); body.append(tr); }); table.append(body); section.append(table);
          printField(section, '학생이 최종 선택한 아이디어', data.ideas.find(i => i.id === data.selectedId)?.name || (data.selectedId ? '이름 미작성 아이디어' : ''), blank);
        }
        s.fields.forEach(([id, label, hint, tag], i) => {
          if (id === 'problem') section.append(el('p', 'print-description', hint)); printField(section, label + (tag ? ` (${tag})` : ''), data.fields[id], blank);
          if (index === 1 && i === 0) data.interviews.forEach((item, j) => { section.append(el('h3', '', `인터뷰 ${j + 1}`)); printField(section, '질문', item.question, blank); printField(section, '답변', item.answer, blank); });
          if (index === 6 && i === 2) { section.append(el('h3', '', '스케치 이미지 (선택)')); if (!blank && sketch) { const image = el('img', 'print-sketch'); image.src = sketch; image.alt = '첨부한 해결방안 스케치'; section.append(image); } else printField(section, '스케치를 그리거나 붙여 보세요.', '', true); }
        });
        if (index === 3) checkLabels.forEach((label, i) => section.append(el('p', '', `${!blank && data.checks[i] ? '☑' : '☐'} ${label}`)));
      } root.append(section);
    });
  }
  async function printWorkbook(blank) {
    setBusy(true);
    try { await imageQueue; if (!blank && imageReadFailed) { sketch = await imageStore('get'); imageReadFailed = false; } buildPrint(blank); await Promise.all($$('img', $('#print-root')).map(img => img.decode())); await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))); window.print(); }
    catch (e) { notify(`인쇄 준비 실패: ${e.message}`, true); } finally { setBusy(false); }
  }
  async function init() {
    try { const raw = localStorage.getItem(KEY); if (raw) state = validate(JSON.parse(raw)); } catch (e) { saveFailed = true; notify('저장된 텍스트를 복원하지 못했습니다. 브라우저 저장 설정이나 보관한 JSON을 확인하세요. 기존 데이터는 수정 전까지 유지됩니다.', true); }
    renderBasics(); renderNavigation(); renderStage(); setBusy(true);
    try { sketch = await imageStore('get'); if (!validImage(sketch)) { sketch = null; throw new Error('이미지 형식 오류'); } renderStage(); } catch (e) { imageReadFailed = true; notify('이미지 저장소를 읽지 못했습니다. 브라우저 설정을 확인하세요. 텍스트 작성은 계속할 수 있습니다.', true); } finally { setBusy(false); }
    $('#previous-btn').addEventListener('click', () => goTo(state.currentStep - 1)); $('#next-btn').addEventListener('click', () => goTo(state.currentStep + 1));
    $('.brand').addEventListener('click', e => { e.preventDefault(); goTo(0); }); $('#export-btn').addEventListener('click', exportJSON); $('#import-file').addEventListener('change', e => importJSON(e.target.files[0])); $('#reset-btn').addEventListener('click', resetAll);
    $('#print-filled').addEventListener('click', () => printWorkbook(false)); $('#print-blank').addEventListener('click', () => printWorkbook(true));
    window.addEventListener('beforeprint', () => { if (!busy) buildPrint(false); }); window.addEventListener('afterprint', () => buildPrint(false)); buildPrint(false);
  }
  init();
})();
