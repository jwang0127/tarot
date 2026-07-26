'use strict'

/* ================= 牌库数据 ================= */

const ROMAN = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI']

const MAJORS = [
  { name: '愚人', upright: '新的旅程、信任直觉、保持开放', reversed: '冲动冒进或裹足不前，先确认脚下的路' },
  { name: '魔术师', upright: '资源、行动力、把想法变成现实', reversed: '力量分散或空有想法，回到一个可执行的起点' },
  { name: '女祭司', upright: '直觉、内在声音、暂时观察', reversed: '忽视直觉、被表象牵动，给自己一点安静的空间' },
  { name: '皇后', upright: '滋养、创造力、丰盛与成长', reversed: '过度付出或自我忽视，先照顾好自己的需要' },
  { name: '皇帝', upright: '秩序、边界、承担责任', reversed: '控制过度或缺乏边界，重新审视规则的意义' },
  { name: '教皇', upright: '传统、学习、寻找可靠的指导', reversed: '盲从权威或抗拒建议，找到属于自己的判断' },
  { name: '恋人', upright: '选择、连接、价值观的一致', reversed: '摇摆不定或价值冲突，诚实面对内心的答案' },
  { name: '战车', upright: '意志、推进、掌握方向', reversed: '方向散乱或用力过猛，先停下来校准目标' },
  { name: '力量', upright: '耐心、柔韧、温和而坚定', reversed: '自我怀疑或压抑情绪，允许自己先示弱' },
  { name: '隐者', upright: '独处、反思、寻找自己的答案', reversed: '过度封闭或逃避人群，反思之后记得回到生活' },
  { name: '命运之轮', upright: '转机、周期、顺势而为', reversed: '抗拒变化或归咎运气，看看你能掌握的部分' },
  { name: '正义', upright: '平衡、事实、承担选择的结果', reversed: '失衡或回避责任，先把事实摆在桌面上' },
  { name: '倒吊人', upright: '暂停、换个角度、放下控制', reversed: '无谓牺牲或僵持不动，问问这份等待是否值得' },
  { name: '死神', upright: '结束、转化、为新阶段腾出空间', reversed: '抓着旧模式不放，允许一段旅程落幕' },
  { name: '节制', upright: '调和、节奏、找到中间道路', reversed: '节奏失衡或极端摇摆，从小处恢复日常秩序' },
  { name: '恶魔', upright: '执着、诱惑、看见束缚', reversed: '枷锁开始松动，把注意力放回自主权' },
  { name: '高塔', upright: '突然变化、旧结构松动、真实浮现', reversed: '危机被拖延或余震未平，趁机重建更稳的地基' },
  { name: '星星', upright: '希望、疗愈、重新相信未来', reversed: '信心低落或期待过高，从一件小事重拾希望' },
  { name: '月亮', upright: '不确定、情绪、分辨恐惧与直觉', reversed: '迷雾渐散，把猜测和事实分开来看' },
  { name: '太阳', upright: '清晰、活力、坦诚的喜悦', reversed: '暂时的阴影或过度乐观，美好仍在，只是需要耐心' },
  { name: '审判', upright: '觉醒、复盘、回应内心召唤', reversed: '自我批判过重或拖延决定，温和地给过去一个交代' },
  { name: '世界', upright: '完成、整合、进入下一阶段', reversed: '临门一脚的停滞，找出那件还没收尾的事' }
]

const SUITS = [
  { suit: '权杖', element: '火', glyph: '♣', domain: '行动、热情与创造力' },
  { suit: '圣杯', element: '水', glyph: '♥', domain: '情感、关系与直觉' },
  { suit: '宝剑', element: '风', glyph: '♠', domain: '思考、沟通与抉择' },
  { suit: '星币', element: '土', glyph: '♦', domain: '现实、金钱与身体' }
]

const RANKS = [
  { rank: '王牌', corner: 'A', upright: '一股纯粹的新能量，适合开始', reversed: '起点受阻，时机未到或方向未明' },
  { rank: '二', corner: 'II', upright: '权衡、对望与初步的选择', reversed: '摇摆不定，迟迟无法迈出下一步' },
  { rank: '三', corner: 'III', upright: '初见成果，合作与扩展', reversed: '进展缓慢，计划与现实出现落差' },
  { rank: '四', corner: 'IV', upright: '稳定下来，休整或巩固现状', reversed: '停滞与安逸，变化其实已经敲门' },
  { rank: '五', corner: 'V', upright: '摩擦、失落与真实的考验', reversed: '冲突开始缓和，从损失中回收经验' },
  { rank: '六', corner: 'VI', upright: '和谐、给予与被看见', reversed: '付出与回报失衡，过去牵绊着现在' },
  { rank: '七', corner: 'VII', upright: '评估、坚持与选择立场', reversed: '疲惫与幻象，重新确认坚持的理由' },
  { rank: '八', corner: 'VIII', upright: '专注投入，事情加速推进', reversed: '用力过猛或束手束脚，调整推进的节奏' },
  { rank: '九', corner: 'IX', upright: '接近完成，独立与韧性', reversed: '焦虑与防备，别把最后一段路走成孤岛' },
  { rank: '十', corner: 'X', upright: '圆满、承载与一个周期的结束', reversed: '负担过重或圆满的幻象，学会放下与分担' },
  { rank: '侍者', corner: '侍', upright: '学习的心态，新消息与好奇', reversed: '消息延迟或三分钟热度，回到基础练习' },
  { rank: '骑士', corner: '骑', upright: '果敢行动，全力追求目标', reversed: '冒进或拖延，检查行动背后的动机' },
  { rank: '王后', corner: '后', upright: '成熟的滋养与内在笃定', reversed: '过度操心或情绪内耗，先安顿好自己' },
  { rank: '国王', corner: '王', upright: '掌控全局，承担与引领', reversed: '控制欲或权威失衡，用实力而非姿态说话' }
]

const CARDS = [
  ...MAJORS.map((m, i) => ({
    id: `major-${i}`,
    name: m.name,
    arcana: 'major',
    kind: '大阿卡纳',
    corner: ROMAN[i],
    glyph: '☽',
    upright: m.upright,
    reversed: m.reversed
  })),
  ...SUITS.flatMap(s => RANKS.map((r, i) => ({
    id: `${s.suit}-${i}`,
    name: `${s.suit}${r.rank}`,
    arcana: s.suit,
    kind: `${s.suit} · ${s.element}元素`,
    corner: r.corner,
    glyph: s.glyph,
    upright: `${r.upright}——议题聚焦在${s.domain}上。`,
    reversed: `${r.reversed}——试着在${s.domain}里找回平衡。`
  })))
]

/* ================= 牌面图案（内联 SVG 线稿） ================= */

const SUIT_PIP = {
  '权杖': '<line x1="0" y1="-12" x2="0" y2="12"/><path d="M0,-7 C-3,-9 -4,-12 -2,-14 M0,-7 C3,-9 4,-12 2,-14"/>',
  '圣杯': '<path d="M-8,-10 L8,-10 A8,8 0 0 1 -8,-10"/><line x1="0" y1="-2" x2="0" y2="8"/><path d="M-6,11 Q0,7 6,11"/>',
  '宝剑': '<line x1="0" y1="-14" x2="0" y2="8"/><path d="M-3,-9 L0,-14 L3,-9"/><line x1="-6" y1="5" x2="6" y2="5"/><circle cx="0" cy="11" r="2"/>',
  '星币': '<circle cx="0" cy="0" r="11"/><path d="M0,-7 L4.1,5.7 L-6.7,-2.2 L6.7,-2.2 L-4.1,5.7 Z"/>'
}

const PIP_LAYOUTS = {
  1: [[60, 72, 2.1]],
  2: [[60, 40, 1.2], [60, 104, 1.2]],
  3: [[60, 36, 1.2], [38, 104, 1.2], [82, 104, 1.2]],
  4: [[38, 40, 1.1], [82, 40, 1.1], [38, 104, 1.1], [82, 104, 1.1]],
  5: [[38, 38, 1.05], [82, 38, 1.05], [60, 72, 1.05], [38, 106, 1.05], [82, 106, 1.05]],
  6: [[38, 36, 1.05], [82, 36, 1.05], [38, 72, 1.05], [82, 72, 1.05], [38, 108, 1.05], [82, 108, 1.05]],
  7: [[38, 34, 1], [82, 34, 1], [60, 55, 1], [38, 76, 1], [82, 76, 1], [38, 112, 1], [82, 112, 1]],
  8: [[38, 30, .95], [82, 30, .95], [38, 58, .95], [82, 58, .95], [38, 86, .95], [82, 86, .95], [38, 114, .95], [82, 114, .95]],
  9: [[38, 30, .95], [82, 30, .95], [38, 58, .95], [82, 58, .95], [60, 72, .95], [38, 86, .95], [82, 86, .95], [38, 114, .95], [82, 114, .95]],
  10: [[38, 30, .95], [82, 30, .95], [60, 44, .95], [38, 58, .95], [82, 58, .95], [38, 86, .95], [82, 86, .95], [60, 100, .95], [38, 114, .95], [82, 114, .95]]
}

const COURT_EMBLEMS = [
  '<path d="M46,26 V56 M46,28 L74,34 L46,42"/>',
  '<path d="M46,40 L60,26 L74,40 M46,54 L60,40 L74,54"/>',
  '<path d="M44,54 L76,54 L74,34 Q67,46 60,32 Q53,46 46,34 Z"/><circle cx="46" cy="31" r="2" fill="currentColor" stroke="none"/><circle cx="60" cy="28" r="2" fill="currentColor" stroke="none"/><circle cx="74" cy="31" r="2" fill="currentColor" stroke="none"/>',
  '<path d="M44,54 L76,54 L72,32 L65,44 L60,28 L55,44 L48,32 Z"/><path d="M60,24 v-6 M57,21 h6"/>'
]

const MAJOR_ART = {
  '愚人': '<circle cx="90" cy="32" r="10"/><path d="M90,16 v-5 M90,48 v5 M74,32 h-5 M106,32 h5 M79,21 l-4,-4 M101,21 l4,-4 M79,43 l-4,4 M101,43 l4,4"/><path d="M16,130 C42,118 32,94 54,86 C76,78 68,58 88,52"/><circle cx="30" cy="112" r="3"/>',
  '魔术师': '<path d="M45,36 C45,26 60,26 60,36 C60,46 75,46 75,36 C75,26 60,26 60,36 C60,46 45,46 45,36 Z"/><line x1="28" y1="118" x2="92" y2="118"/><circle cx="38" cy="106" r="4.5"/><line x1="54" y1="100" x2="54" y2="112"/><path d="M66,100 L66,112 M62,104 L70,104"/><path d="M78,102 h10 A5,5 0 0 1 78,102"/>',
  '女祭司': '<line x1="30" y1="40" x2="30" y2="126"/><line x1="90" y1="40" x2="90" y2="126"/><path d="M30,40 Q60,22 90,40"/><path d="M66,58 A17,17 0 1 0 66,92 A13,17 0 1 1 66,58 Z"/><line x1="48" y1="112" x2="72" y2="112"/>',
  '皇后': '<circle cx="60" cy="52" r="15"/><line x1="60" y1="67" x2="60" y2="94"/><line x1="49" y1="81" x2="71" y2="81"/><path d="M32,128 C36,108 32,92 40,76 M88,128 C84,108 88,92 80,76"/><path d="M37,100 l-7,-4 M38,90 l-7,-4 M83,100 l7,-4 M82,90 l7,-4"/>',
  '皇帝': '<path d="M36,118 V46 h48 V118"/><circle cx="36" cy="44" r="7"/><circle cx="84" cy="44" r="7"/><circle cx="60" cy="74" r="8"/><line x1="60" y1="82" x2="60" y2="104"/><line x1="60" y1="66" x2="60" y2="58"/>',
  '教皇': '<line x1="60" y1="30" x2="60" y2="112"/><line x1="44" y1="48" x2="76" y2="48"/><line x1="48" y1="64" x2="72" y2="64"/><line x1="52" y1="80" x2="68" y2="80"/><path d="M36,128 Q60,114 84,128"/>',
  '恋人': '<circle cx="50" cy="90" r="15"/><circle cx="70" cy="90" r="15"/><circle cx="60" cy="40" r="9"/><path d="M60,26 v-6 M60,54 v6 M46,40 h-6 M74,40 h6 M50,30 l-4,-4 M70,30 l4,-4 M50,50 l-4,4 M70,50 l4,4"/>',
  '战车': '<rect x="36" y="56" width="48" height="34"/><line x1="36" y1="56" x2="36" y2="36"/><line x1="84" y1="56" x2="84" y2="36"/><line x1="32" y1="36" x2="88" y2="36"/><circle cx="44" cy="102" r="10"/><circle cx="76" cy="102" r="10"/><path d="M60,63 l3,7 7,3 -7,3 -3,7 -3,-7 -7,-3 7,-3 Z"/>',
  '力量': '<path d="M45,34 C45,26 60,26 60,34 C60,42 75,42 75,34 C75,26 60,26 60,34 C60,42 45,42 45,34 Z"/><circle cx="60" cy="88" r="18"/><path d="M60,70 v-8 M73,75 l6,-6 M78,88 h8 M73,101 l6,6 M60,106 v8 M47,101 l-6,6 M42,88 h-8 M47,75 l-6,-6"/><path d="M55,92 q5,5 10,0"/>',
  '隐者': '<line x1="86" y1="36" x2="86" y2="124"/><path d="M36,62 h24 v38 h-24 Z"/><path d="M48,62 V52 Q48,46 56,48"/><path d="M48,72 l2.2,6 6,2.2 -6,2.2 -2.2,6 -2.2,-6 -6,-2.2 6,-2.2 Z"/>',
  '命运之轮': '<circle cx="60" cy="78" r="30"/><circle cx="60" cy="78" r="8"/><line x1="68" y1="78" x2="90" y2="78"/><line x1="52" y1="78" x2="30" y2="78"/><line x1="60" y1="70" x2="60" y2="48"/><line x1="60" y1="86" x2="60" y2="108"/><line x1="65.7" y1="72.3" x2="81.2" y2="56.8"/><line x1="54.3" y1="83.7" x2="38.8" y2="99.2"/><line x1="65.7" y1="83.7" x2="81.2" y2="99.2"/><line x1="54.3" y1="72.3" x2="38.8" y2="56.8"/>',
  '正义': '<line x1="60" y1="28" x2="60" y2="118"/><path d="M54,118 h12"/><line x1="34" y1="48" x2="86" y2="48"/><line x1="34" y1="48" x2="34" y2="64"/><line x1="86" y1="48" x2="86" y2="64"/><path d="M24,64 A10,10 0 0 0 44,64"/><path d="M76,64 A10,10 0 0 0 96,64"/>',
  '倒吊人': '<line x1="34" y1="34" x2="86" y2="34"/><line x1="34" y1="34" x2="34" y2="126"/><line x1="66" y1="34" x2="66" y2="54"/><line x1="66" y1="54" x2="66" y2="88"/><path d="M66,72 l-11,10 M66,72 l11,10 M66,54 l-9,-8"/><circle cx="66" cy="98" r="9"/><path d="M52,98 h-5 M80,98 h5 M66,112 v5"/>',
  '死神': '<g transform="translate(60,58)"><ellipse cx="0" cy="-11" rx="4.5" ry="7"/><ellipse cx="0" cy="-11" rx="4.5" ry="7" transform="rotate(72)"/><ellipse cx="0" cy="-11" rx="4.5" ry="7" transform="rotate(144)"/><ellipse cx="0" cy="-11" rx="4.5" ry="7" transform="rotate(216)"/><ellipse cx="0" cy="-11" rx="4.5" ry="7" transform="rotate(288)"/><circle r="4"/></g><path d="M36,126 A24,24 0 0 1 84,126"/><line x1="28" y1="126" x2="92" y2="126"/><path d="M60,102 v8 M46,108 l4,6 M74,108 l-4,6"/>',
  '节制': '<circle cx="60" cy="34" r="10"/><path d="M60,27 L66,40 H54 Z"/><g transform="translate(42,72) scale(.9)"><path d="M-8,-10 L8,-10 A8,8 0 0 1 -8,-10"/><line x1="0" y1="-2" x2="0" y2="8"/><path d="M-6,11 Q0,7 6,11"/></g><g transform="translate(78,100) scale(.9)"><path d="M-8,-10 L8,-10 A8,8 0 0 1 -8,-10"/><line x1="0" y1="-2" x2="0" y2="8"/><path d="M-6,11 Q0,7 6,11"/></g><path d="M48,74 C60,78 64,88 72,94"/>',
  '恶魔': '<circle cx="60" cy="66" r="26"/><path d="M60,86 L48.2,49.8 L79,72.2 L41,72.2 L71.8,49.8 Z"/><path d="M40,110 a6,6 0 1 0 12,2 a6,6 0 1 0 12,2 a6,6 0 1 0 12,2"/>',
  '高塔': '<path d="M48,58 L72,58 L70,124 L50,124 Z"/><path d="M88,20 L62,50 L74,54 L50,88"/><circle cx="58" cy="72" r="2" fill="currentColor" stroke="none"/><circle cx="62" cy="96" r="2" fill="currentColor" stroke="none"/><circle cx="34" cy="96" r="2" fill="currentColor" stroke="none"/><circle cx="88" cy="82" r="2" fill="currentColor" stroke="none"/><circle cx="40" cy="68" r="2" fill="currentColor" stroke="none"/>',
  '星星': '<path d="M60,24 L64,50 L90,54 L64,58 L60,84 L56,58 L30,54 L56,50 Z"/><path d="M75,39 L66,48 M45,69 L54,60 M45,39 L54,48 M75,69 L66,60"/><circle cx="30" cy="30" r="1.8" fill="currentColor" stroke="none"/><circle cx="92" cy="34" r="1.8" fill="currentColor" stroke="none"/><circle cx="26" cy="86" r="1.8" fill="currentColor" stroke="none"/><circle cx="94" cy="90" r="1.8" fill="currentColor" stroke="none"/><path d="M30,118 q10,-7 20,0 q10,7 20,0 q10,-7 20,0"/>',
  '月亮': '<circle cx="60" cy="52" r="19"/><path d="M66,40 A13,13 0 1 0 66,64 A10,13 0 1 1 66,40 Z"/><path d="M26,124 V90 h12 v34 M82,124 V90 h12 v34 M24,90 h16 M80,90 h16"/><path d="M42,131 C52,120 68,120 78,131"/><path d="M52,78 v6 M60,80 v6 M68,78 v6"/>',
  '太阳': '<circle cx="60" cy="64" r="20"/><path d="M60,38 V26 M60,90 v12 M34,64 H22 M86,64 h12 M42,46 l-9,-9 M78,46 l9,-9 M42,82 l-9,9 M78,82 l9,9"/><path d="M50,60 a3,3 0 0 1 6,0 M64,60 a3,3 0 0 1 6,0 M52,70 q8,7 16,0"/>',
  '审判': '<line x1="32" y1="38" x2="80" y2="62"/><path d="M80,62 L96,54 L92,78 Z"/><path d="M84,88 l5,8 M74,92 l2,9 M94,80 l9,5"/><rect x="38" y="72" width="20" height="20"/><path d="M48,72 v20 M38,82 h20"/><line x1="38" y1="72" x2="38" y2="118"/>',
  '世界': '<ellipse cx="60" cy="76" rx="27" ry="42" stroke-dasharray="7 5"/><path d="M52,30 q8,7 16,0 M52,122 q8,7 16,0"/><path d="M22,22 l1.8,4.2 4.2,1.8 -4.2,1.8 -1.8,4.2 -1.8,-4.2 -4.2,-1.8 4.2,-1.8 Z"/><path d="M98,22 l1.8,4.2 4.2,1.8 -4.2,1.8 -1.8,4.2 -1.8,-4.2 -4.2,-1.8 4.2,-1.8 Z"/><path d="M22,120 l1.8,4.2 4.2,1.8 -4.2,1.8 -1.8,4.2 -1.8,-4.2 -4.2,-1.8 4.2,-1.8 Z"/><path d="M98,120 l1.8,4.2 4.2,1.8 -4.2,1.8 -1.8,4.2 -1.8,-4.2 -4.2,-1.8 4.2,-1.8 Z"/>'
}

function svgWrap(content) {
  return `<svg class="card-art" viewBox="0 0 120 150" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${content}</svg>`
}

function cardArt(card) {
  if (card.arcana === 'major') return svgWrap(MAJOR_ART[card.name] || '')
  const suit = card.arcana
  const rankIndex = Number(card.id.split('-')[1])
  if (rankIndex <= 9) {
    const pips = PIP_LAYOUTS[rankIndex + 1]
      .map(([x, y, s]) => `<g transform="translate(${x},${y}) scale(${s})" stroke-width="${(2.2 / s).toFixed(2)}">${SUIT_PIP[suit]}</g>`)
      .join('')
    return svgWrap(pips)
  }
  const emblem = COURT_EMBLEMS[rankIndex - 10]
  return svgWrap(`${emblem}<g transform="translate(60,98) scale(2)" stroke-width="1.1">${SUIT_PIP[suit]}</g>`)
}

/* ================= 问题与牌阵 ================= */

const TOPICS = { love: '关系与感情', career: '工作与方向', growth: '自我成长', decision: '选择与决定', open: '开放探索' }

const QUESTION_OPTIONS = {
  love: ['我在这段关系中最需要看清什么？', '我该如何更诚实地表达自己的需要？', '这段关系正在教会我什么？'],
  career: ['我目前的工作方向值得继续投入吗？', '我下一步最应该把精力放在哪里？', '我今天的财运需要注意什么？'],
  growth: ['我现在最需要突破的内在卡点是什么？', '有什么能力值得我开始培养？', '我该怎样更好地照顾自己的状态？'],
  decision: ['这个选择中我忽略了什么？', '留下还是离开，我该怎么看？', '现在行动与等待，各自意味着什么？'],
  open: ['我此刻最需要听见的提醒是什么？', '最近有什么主题正在反复出现？', '我现在可以从哪里开始？']
}

const SPREADS = {
  one: {
    name: '单张指引', count: 1, desc: '适合今日运势与快速提醒',
    positions: [{ label: '当下指引', hint: '此刻最值得你留意的一股能量' }]
  },
  three: {
    name: '时间之流', count: 3, desc: '适合梳理过程、原因与下一步',
    positions: [
      { label: '过去的影响', hint: '它如何塑造了你现在的处境与习惯' },
      { label: '现在的状态', hint: '此刻真正占据你注意力的是什么' },
      { label: '未来的走向', hint: '如果保持现状，事情自然会往哪里发展' }
    ]
  },
  choice: {
    name: '两难对比', count: 3, desc: '适合二选一，对比两条路的能量',
    positions: [
      { label: '选择 A 的能量', hint: '走这条路，你会进入怎样的状态' },
      { label: '选择 B 的能量', hint: '走那条路，你会进入怎样的状态' },
      { label: '内心的提醒', hint: '做决定前，真正需要被承认的部分' }
    ]
  }
}

/* ================= 工具函数 ================= */

const app = document.querySelector('#app')

const store = {
  get(key) { try { return localStorage.getItem(key) } catch { return null } },
  set(key, value) { try { localStorage.setItem(key, value) } catch { /* 隐私模式下静默失败 */ } }
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]))
}

function hash(value) {
  let n = 2166136261
  for (const c of value) n = Math.imul(n ^ c.charCodeAt(0), 16777619)
  return n >>> 0
}

function randInt(max) {
  if (window.crypto && crypto.getRandomValues) {
    const limit = Math.floor(0x100000000 / max) * max
    const buf = new Uint32Array(1)
    let x
    do { crypto.getRandomValues(buf); x = buf[0] } while (x >= limit)
    return x % max
  }
  return Math.floor(Math.random() * max)
}

function shuffle(list) {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = randInt(i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function todayKey() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function todayText() {
  return new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }).format(new Date())
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/* ================= 音效 ================= */

let audioCtx = null

function tone(freq = 440, duration = 0.16) {
  if (state.muted) return
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext
    if (!Ctx) return
    if (!audioCtx) audioCtx = new Ctx()
    if (audioCtx.state === 'suspended') audioCtx.resume()
    const t = audioCtx.currentTime
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    osc.type = 'sine'
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.0001, t)
    gain.gain.exponentialRampToValueAtTime(0.05, t + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration)
    osc.connect(gain).connect(audioCtx.destination)
    osc.start(t)
    osc.stop(t + duration + 0.05)
  } catch { /* 音效失败不影响功能 */ }
}

/* ================= 状态 ================= */

const state = {
  topic: 'open',
  question: '',
  spread: 'three',
  spreadManual: false,
  drawn: [],
  revealed: 0,
  clarifier: null,
  muted: store.get('moonveil-muted') !== 'off',
  libFilter: 'all',
  libQuery: ''
}

/* ================= 通用渲染 ================= */

function shell(content, page) {
  document.title = {
    home: '月隐 Tarot｜把问题交给牌',
    ask: '问题占卜｜月隐 Tarot',
    reading: '牌阵解读｜月隐 Tarot',
    daily: '今日一牌｜月隐 Tarot',
    cards: '牌意图鉴｜月隐 Tarot'
  }[page] || '月隐 Tarot'
  app.innerHTML = `
    <div class="shell">
      <header class="site-header">
        <button class="brand" data-action="home" aria-label="回到首页">☽ 月隐 <span>Tarot</span></button>
        <nav class="header-nav">
          <button class="nav-btn ${page === 'cards' ? 'active' : ''}" data-action="cards">牌意图鉴</button>
          <button class="nav-btn" data-action="sound" aria-pressed="${!state.muted}">${state.muted ? '🔇 声音关' : '🔔 声音开'}</button>
        </nav>
      </header>
      ${content}
      <footer class="site-footer">仅用于娱乐与自我探索 · 把问题交给牌，把答案留给自己</footer>
    </div>`
}

function showToast(message) {
  document.querySelector('.toast')?.remove()
  const el = document.createElement('div')
  el.className = 'toast'
  el.setAttribute('role', 'status')
  el.textContent = message
  document.body.appendChild(el)
  setTimeout(() => el.classList.add('show'), 20)
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400) }, 2200)
}

/* ================= 首页 ================= */

function renderHome() {
  shell(`
    <section class="hero">
      <div class="eyebrow">A QUIET MOMENT WITH YOURSELF</div>
      <h1>把问题交给牌<br><em>把答案留给自己</em></h1>
      <p class="hero-sub">一次安静、私密的塔罗自我探索。不注册、不留存，问题只属于你。</p>
      <div class="hero-card-wrap" aria-hidden="true">
        <div class="hero-card"><div class="orb">☽</div><div class="card-caption">THE MOON VEIL</div></div>
        <div class="hero-glow"></div>
      </div>
      <div class="entry-grid">
        <button class="entry primary-entry" data-action="start">
          <span class="entry-kicker">QUESTION READING</span>
          <strong>问题占卜<b>→</b></strong>
          <small>带着一个具体问题，选主题与牌阵，让牌面展开线索。</small>
        </button>
        <button class="entry" data-action="daily">
          <span class="entry-kicker">DAILY GUIDANCE</span>
          <strong>今日一牌<b>→</b></strong>
          <small>无需提问，每天一张固定的牌，给你一个关键词与小行动。</small>
        </button>
        <button class="entry" data-action="cards">
          <span class="entry-kicker">CARD LIBRARY</span>
          <strong>牌意图鉴<b>→</b></strong>
          <small>浏览 78 张牌的正位与逆位含义，支持搜索与筛选。</small>
        </button>
      </div>
    </section>`, 'home')
}

/* ================= 问题占卜：设置 ================= */

function recommendSpread(question, topic) {
  if (topic === 'decision' || /还是|要不要|该不该|哪一个|哪个好/.test(question)) return 'choice'
  if (/今天|今日|当下|本周|近期|运势|财运/.test(question)) return 'one'
  return 'three'
}

function spreadOptionMarkup(key) {
  const s = SPREADS[key]
  const recommended = recommendSpread(state.question, state.topic) === key
  return `
    <button class="spread-option ${state.spread === key ? 'selected' : ''}" data-action="spread" data-spread="${key}">
      <span class="spread-name">${s.name}<i class="spread-count">${s.count} 张</i></span>
      <small>${s.desc}</small>
      <em class="badge ${recommended ? 'show' : ''}">推荐</em>
    </button>`
}

function renderAsk() {
  if (!state.spreadManual) state.spread = recommendSpread(state.question, state.topic)
  const chips = QUESTION_OPTIONS[state.topic]
  shell(`
    <section class="panel">
      <div class="steps"><span class="active">1 主题</span><i>·</i><span class="active">2 问题</span><i>·</i><span>3 抽牌</span></div>
      <div class="eyebrow">QUESTION READING</div>
      <h2>先说清楚，你想看什么</h2>
      <p class="muted">问题越具体，解读越容易落到你真正关心的事情上。</p>
      <div class="topic-grid" role="group" aria-label="选择主题">
        ${Object.entries(TOPICS).map(([id, label]) => `<button class="topic-option ${state.topic === id ? 'selected' : ''}" data-action="topic" data-topic="${id}">${label}</button>`).join('')}
      </div>
      <label class="field-label" for="question">写下你的问题<span>可选，也可以点选下面的示例</span></label>
      <div class="textarea-wrap">
        <textarea id="question" maxlength="120" rows="3" placeholder="例如：我最近最需要关注什么？">${escapeHtml(state.question)}</textarea>
        <span class="char-count" id="char-count">${state.question.length}/120</span>
      </div>
      <div class="question-chips">${chips.map(q => `<button class="chip" data-action="chip">${escapeHtml(q)}</button>`).join('')}</div>
      <div class="spread-choice">
        <span class="eyebrow">选择牌阵</span>
        <div class="spread-options">${Object.keys(SPREADS).map(spreadOptionMarkup).join('')}</div>
      </div>
      <button class="btn-primary wide" data-action="draw"><span id="draw-label">开始洗牌 · ${SPREADS[state.spread].name}</span><b>→</b></button>
      <button class="btn-link" data-action="home">返回首页</button>
    </section>`, 'ask')
}

function refreshSpreadUI() {
  const recommended = recommendSpread(state.question, state.topic)
  document.querySelectorAll('[data-spread]').forEach(el => {
    el.classList.toggle('selected', el.dataset.spread === state.spread)
    el.querySelector('.badge')?.classList.toggle('show', el.dataset.spread === recommended)
  })
  const label = document.querySelector('#draw-label')
  if (label) label.textContent = `开始洗牌 · ${SPREADS[state.spread].name}`
}

/* ================= 问题占卜：抽牌与解读 ================= */

function drawCards() {
  const spread = SPREADS[state.spread]
  state.drawn = shuffle(CARDS).slice(0, spread.count).map(card => ({
    ...card,
    orientation: randInt(100) < 30 ? 'reversed' : 'upright'
  }))
  state.revealed = 0
  state.clarifier = null
}

function drawClarifier() {
  const used = new Set(state.drawn.map(c => c.id))
  const rest = CARDS.filter(c => !used.has(c.id))
  const card = rest[randInt(rest.length)]
  state.clarifier = { ...card, orientation: randInt(100) < 30 ? 'reversed' : 'upright' }
}

function cardMarkup(card, index, position, revealed) {
  const upright = card.orientation === 'upright'
  return `
    <button class="draw-card ${revealed ? 'revealed' : ''}" data-action="reveal" data-index="${index}"
      style="--deal-delay:${index * 130}ms" aria-label="${position.label}：${revealed ? `${card.name}${upright ? '正位' : '逆位'}` : '点击翻牌'}">
      <span class="position-tag">${position.label}</span>
      <span class="card-inner">
        <span class="card-back"><i class="back-orb">✦</i><small>轻点翻牌</small></span>
        <span class="card-face ${upright ? '' : 'is-reversed'}">
          <i class="corner">${card.corner}</i>
          <span class="art">${cardArt(card)}</span>
          <strong>${card.name}</strong>
          <small>${card.kind}</small>
          <em class="orientation ${upright ? '' : 'rev'}">${upright ? '正位' : '逆位'}</em>
        </span>
      </span>
    </button>`
}

function renderReading() {
  if (!state.drawn.length) { navigate('ask'); return }
  const spread = SPREADS[state.spread]
  const question = state.question || '我现在最需要看清什么？'
  const done = state.revealed >= state.drawn.length
  shell(`
    <section class="reading">
      <div class="reading-top">
        <div>
          <div class="eyebrow">QUESTION READING · ${TOPICS[state.topic]} · ${spread.name}</div>
          <h2>${spread.count === 1 ? '一张牌，先看清当下' : '让牌面回答你的问题'}</h2>
          <p class="muted question-line">问题：${escapeHtml(question)}</p>
        </div>
        <button class="btn-ghost small" data-action="restart">换个问题</button>
      </div>
      <div class="spread-row ${spread.count === 1 ? 'one-card' : ''}">
        ${state.drawn.map((card, i) => cardMarkup(card, i, spread.positions[i], i < state.revealed)).join('')}
      </div>
      <div id="interp-slot">${done ? interpretationMarkup() : `<p class="hint" id="reveal-hint">按从左到右的顺序，翻开第 ${state.revealed + 1} 张牌</p>`}</div>
    </section>`, 'reading')
}

function orientationText(card) { return card.orientation === 'upright' ? '正位' : '逆位' }
function meaningText(card) { return card.orientation === 'upright' ? card.upright : card.reversed }

function synthesisText() {
  const spread = SPREADS[state.spread]
  const cardsDrawn = state.drawn
  const reversedCards = cardsDrawn.filter(c => c.orientation === 'reversed')
  if (state.spread === 'one') return ''
  if (state.spread === 'choice') {
    const [a, b, mind] = cardsDrawn
    const aUp = a.orientation === 'upright'
    const bUp = b.orientation === 'upright'
    let compare
    if (aUp && !bUp) compare = `就牌面而言，选择 A（${a.name}）的能量此刻更为顺畅，选择 B（${b.name}）则有待疏通。但顺畅不等于正确——`
    else if (!aUp && bUp) compare = `就牌面而言，选择 B（${b.name}）的能量此刻更为顺畅，选择 A（${a.name}）则有待疏通。但顺畅不等于正确——`
    else if (aUp && bUp) compare = `两条路的能量都不淤堵，决定权真正回到你自己的标准：哪一个更接近你想成为的人？`
    else compare = `两个选项此刻都有阻力，也许问题不在于二选一，而在于时机，或一条还没被看见的第三条路。`
    return `${compare}把它们与「${mind.name}」所代表的内心提醒放在一起，再做决定。`
  }
  const [a, b, c] = cardsDrawn
  let note
  if (reversedCards.length === 0) note = '三张牌都以正位出现，整体能量顺畅，重点在于把理解变成行动。'
  else if (reversedCards.length === 1) note = `其中「${reversedCards[0].name}」以逆位出现，那里正是最值得温柔检视的卡点。`
  else note = '逆位较多，说明当下更适合调整与休整，而不是强行推进。'
  return `「${a.name}」构成了故事的背景，「${b.name}」描述了此刻的核心，而「${c.name}」指出接下来的方向。${note}`
}

function adviceText() {
  return {
    one: '选择一件与问题直接相关的小事，为它安排十分钟，不要同时处理太多方向。',
    three: '把问题改写成一个你能控制的动作，并为它安排一个明确的时间。',
    choice: '先假装已经选了 A 生活半天，再换成 B，留意身体和情绪各自的反应。'
  }[state.spread]
}

function interpretationMarkup() {
  const spread = SPREADS[state.spread]
  const question = state.question || '我现在最需要看清什么？'
  const items = state.drawn.map((card, i) => {
    const pos = spread.positions[i]
    return `
      <div class="meaning">
        <strong>${pos.label} · ${card.name}（${orientationText(card)}）</strong>
        <p>${meaningText(card)}</p>
        <small>值得观察：${pos.hint}。</small>
      </div>`
  }).join('')
  const synthesis = synthesisText()
  return `
    <div class="interpretation fade-up">
      <div class="eyebrow">A CLEARER REFLECTION</div>
      <h3>${spread.count === 1 ? '这张牌给你的提示' : '牌面之间的线索'}</h3>
      ${items}
      ${synthesis ? `<div class="synthesis"><strong>整体来看</strong><p>${synthesis}</p></div>` : ''}
      ${state.clarifier ? clarifierMarkup() : ''}
      <div class="advice"><strong>今天可以做的一件事</strong><p>${adviceText()}</p></div>
      <p class="disclaimer">这是一种自我探索式解读，不是确定性预言，也不能替代医疗、法律或财务等专业意见。</p>
      <div class="action-row">
        ${state.clarifier ? '' : '<button class="btn-ghost" data-action="clarify">追加一张澄清牌</button>'}
        <button class="btn-primary" data-action="redraw">再抽一次</button>
        <button class="btn-ghost" data-action="copy">复制解读</button>
        <button class="btn-ghost" data-action="restart">换个问题</button>
        <button class="btn-ghost" data-action="home">回首页</button>
      </div>
    </div>`
}

function clarifierMarkup() {
  const card = state.clarifier
  return `
    <div class="meaning clarifier fade-up">
      <strong>澄清牌 · ${card.name}（${orientationText(card)}）</strong>
      <p>${meaningText(card)}</p>
      <small>澄清牌不改变前面的解读，只为还看不清的部分补充一个角度。</small>
    </div>`
}

function readingPlainText() {
  const spread = SPREADS[state.spread]
  const question = state.question || '我现在最需要看清什么？'
  const lines = [
    '☽ 月隐 Tarot · 问题占卜',
    `日期：${todayText()}`,
    `问题：${question}`,
    `牌阵：${spread.name}（${spread.count} 张）`,
    ''
  ]
  state.drawn.forEach((card, i) => {
    lines.push(`【${spread.positions[i].label}】${card.name} · ${orientationText(card)}`)
    lines.push(meaningText(card))
    lines.push('')
  })
  const synthesis = synthesisText()
  if (synthesis) lines.push(`【整体来看】${synthesis}`, '')
  if (state.clarifier) {
    lines.push(`【澄清牌】${state.clarifier.name} · ${orientationText(state.clarifier)}`)
    lines.push(meaningText(state.clarifier), '')
  }
  lines.push(`【今天可以做的一件事】${adviceText()}`, '', '（自我探索式解读，非确定性预言）')
  return lines.join('\n')
}

async function copyReading() {
  const text = readingPlainText()
  try {
    await navigator.clipboard.writeText(text)
    showToast('解读已复制，可以粘贴保存')
  } catch {
    const area = document.createElement('textarea')
    area.value = text
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    let ok = false
    try { ok = document.execCommand('copy') } catch { ok = false }
    area.remove()
    showToast(ok ? '解读已复制，可以粘贴保存' : '复制失败，请截图保存')
  }
}

function handleReveal(cardEl) {
  const index = Number(cardEl.dataset.index)
  if (index < state.revealed) return
  if (index > state.revealed) {
    cardEl.classList.remove('nudge')
    void cardEl.offsetWidth
    cardEl.classList.add('nudge')
    showToast(`先翻开第 ${state.revealed + 1} 张牌`)
    return
  }
  state.revealed++
  cardEl.classList.add('revealed')
  const card = state.drawn[index]
  cardEl.setAttribute('aria-label', `${SPREADS[state.spread].positions[index].label}：${card.name}${orientationText(card)}`)
  tone(440 + index * 110, 0.2)
  const slot = document.querySelector('#interp-slot')
  if (!slot) return
  if (state.revealed >= state.drawn.length) {
    setTimeout(() => {
      slot.innerHTML = interpretationMarkup()
      if (!prefersReducedMotion()) slot.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 550)
  } else {
    const hint = document.querySelector('#reveal-hint')
    if (hint) hint.textContent = `已翻开 ${state.revealed}/${state.drawn.length} · 继续翻开第 ${state.revealed + 1} 张牌`
  }
}

/* ================= 今日一牌 ================= */

function getDailyCard() {
  const key = todayKey()
  const card = CARDS[hash(`${key}-moonveil`) % CARDS.length]
  const orientation = hash(`${key}-orientation`) % 10 < 3 ? 'reversed' : 'upright'
  return { ...card, orientation }
}

function dailyRevealedToday() {
  return store.get('moonveil-daily') === todayKey()
}

function dailyAdviceFor(card) {
  if (card.orientation === 'reversed') {
    return {
      remind: '今天不必急着推进，先看清哪里卡住了。',
      action: '留出十分钟不被打扰的时间，写下三件此刻可控的小事。'
    }
  }
  const map = {
    major: { remind: '今天的主题比日常事务更深一层，留意反复出现的念头。', action: '把今天印象最深的一件事记下来，晚上回看一次。' },
    '权杖': { remind: '把热情放进一个具体的行动里，而不是停在计划。', action: '选一件拖了很久的小事，今天先做十分钟。' },
    '圣杯': { remind: '留意自己的感受，也留意身边人的情绪。', action: '向一位你在乎的人，说一句真诚的话。' },
    '宝剑': { remind: '想清楚再说，说清楚再做。', action: '把纠结的事写成三行字，划掉不属于事实的那部分。' },
    '星币': { remind: '照顾好身体与手头的资源，慢就是快。', action: '整理一件具体的事务：桌面、账单或日程。' }
  }
  return map[card.arcana] || map.major
}

function dailyKeyword(card) {
  const source = card.orientation === 'upright' ? card.upright : card.reversed
  return source.split(/[、，—]/)[0]
}

function dailyResultMarkup(card) {
  const advice = dailyAdviceFor(card)
  return `
    <div class="daily-result fade-up">
      <div class="eyebrow">TODAY'S REFLECTION</div>
      <h3>今日关键词：${dailyKeyword(card)}</h3>
      <p>${meaningText(card)}</p>
      <div class="daily-columns">
        <div><strong>今日提醒</strong><span>${advice.remind}</span></div>
        <div><strong>今日行动</strong><span>${advice.action}</span></div>
      </div>
      <p class="disclaimer">今日一牌是当天的自我提醒，不是对未来的确定性预测。</p>
    </div>`
}

function renderDaily() {
  const card = getDailyCard()
  const revealed = dailyRevealedToday()
  const upright = card.orientation === 'upright'
  shell(`
    <section class="daily-page">
      <div class="eyebrow">DAILY GUIDANCE</div>
      <div class="daily-date">${todayText()}</div>
      <h2>今天，给自己一个方向</h2>
      <p class="muted">今日牌每天固定一张。一天中任何时候回来，看到的都是同一张牌。</p>
      <div class="daily-card-wrap">
        <button class="draw-card daily-size ${revealed ? 'revealed' : ''}" data-action="daily-reveal" aria-label="${revealed ? `今日牌：${card.name}${orientationText(card)}` : '翻开今日的牌'}">
          <span class="card-inner">
            <span class="card-back"><i class="back-orb">✦</i><small>今天的牌</small></span>
            <span class="card-face ${upright ? '' : 'is-reversed'}">
              <i class="corner">${card.corner}</i>
              <span class="art">${cardArt(card)}</span>
              <strong>${card.name}</strong>
              <small>${card.kind}</small>
              <em class="orientation ${upright ? '' : 'rev'}">${orientationText(card)}</em>
            </span>
          </span>
        </button>
      </div>
      <div id="daily-slot">${revealed ? dailyResultMarkup(card) : '<p class="hint">轻点牌背，翻开今天的牌</p>'}</div>
      <button class="btn-link" data-action="home">返回首页</button>
    </section>`, 'daily')
}

function handleDailyReveal(cardEl) {
  if (cardEl.classList.contains('revealed')) return
  const card = getDailyCard()
  store.set('moonveil-daily', todayKey())
  cardEl.classList.add('revealed')
  cardEl.setAttribute('aria-label', `今日牌：${card.name}${orientationText(card)}`)
  tone(520, 0.2)
  const slot = document.querySelector('#daily-slot')
  if (slot) setTimeout(() => { slot.innerHTML = dailyResultMarkup(card) }, 550)
}

/* ================= 牌意图鉴 ================= */

const LIB_FILTERS = [
  ['all', '全部 78 张'],
  ['major', '大阿卡纳'],
  ['权杖', '权杖 · 火'],
  ['圣杯', '圣杯 · 水'],
  ['宝剑', '宝剑 · 风'],
  ['星币', '星币 · 土']
]

function libraryCards() {
  const query = state.libQuery.trim().toLowerCase()
  return CARDS.filter(card => {
    if (state.libFilter !== 'all' && card.arcana !== state.libFilter) return false
    if (!query) return true
    return `${card.name}${card.kind}${card.upright}${card.reversed}`.toLowerCase().includes(query)
  })
}

function libraryGridMarkup() {
  const list = libraryCards()
  if (!list.length) return '<p class="hint">没有找到匹配的牌，换个关键词试试。</p>'
  return list.map(card => `
    <button class="lib-card" data-action="card-open" data-card="${card.id}">
      <span class="lib-art">${cardArt(card)}</span>
      <span class="lib-corner">${card.corner}</span>
      <strong>${card.name}</strong>
      <small>${card.kind}</small>
    </button>`).join('')
}

function renderCards() {
  shell(`
    <section class="library">
      <div class="eyebrow">CARD LIBRARY</div>
      <h2>78 张牌意图鉴</h2>
      <p class="muted">轻点任意一张牌，查看正位与逆位的含义。</p>
      <div class="lib-toolbar">
        <input id="lib-search" type="search" placeholder="搜索牌名或关键词…" value="${escapeHtml(state.libQuery)}" aria-label="搜索牌意" />
        <div class="lib-filters">
          ${LIB_FILTERS.map(([id, label]) => `<button class="chip ${state.libFilter === id ? 'selected' : ''}" data-action="lib-filter" data-filter="${id}">${label}</button>`).join('')}
        </div>
      </div>
      <div class="lib-grid" id="lib-grid">${libraryGridMarkup()}</div>
      <button class="btn-link" data-action="home">返回首页</button>
    </section>`, 'cards')
}

function openCardModal(cardId) {
  const card = CARDS.find(c => c.id === cardId)
  if (!card) return
  closeModal()
  const modal = document.createElement('div')
  modal.className = 'modal-backdrop'
  modal.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="${card.name} 牌意">
      <button class="modal-close" data-action="modal-close" aria-label="关闭">✕</button>
      <div class="modal-card">
        <span class="card-face static">
          <i class="corner">${card.corner}</i>
          <span class="art">${cardArt(card)}</span>
          <strong>${card.name}</strong>
          <small>${card.kind}</small>
        </span>
      </div>
      <div class="modal-body">
        <h3>${card.name}</h3>
        <small class="muted">${card.kind}</small>
        <div class="meaning"><strong>正位</strong><p>${card.upright}</p></div>
        <div class="meaning"><strong>逆位</strong><p>${card.reversed}</p></div>
      </div>
    </div>`
  document.body.appendChild(modal)
  document.documentElement.classList.add('modal-open')
  tone(500, 0.12)
}

function closeModal() {
  document.querySelector('.modal-backdrop')?.remove()
  document.documentElement.classList.remove('modal-open')
}

/* ================= 路由 ================= */

const ROUTES = { home: renderHome, ask: renderAsk, reading: renderReading, daily: renderDaily, cards: renderCards }

function navigate(page) {
  const target = page === 'home' ? '#/' : `#/${page}`
  if (location.hash === target) renderRoute()
  else location.hash = target
}

function renderRoute() {
  closeModal()
  const page = location.hash.replace(/^#\/?/, '') || 'home'
  ;(ROUTES[page] || renderHome)()
  window.scrollTo(0, 0)
}

/* ================= 事件 ================= */

function handleAction(el) {
  switch (el.dataset.action) {
    case 'home': navigate('home'); break
    case 'start': navigate('ask'); break
    case 'daily': navigate('daily'); break
    case 'cards': navigate('cards'); break
    case 'sound': {
      state.muted = !state.muted
      store.set('moonveil-muted', state.muted ? 'off' : 'on')
      el.textContent = state.muted ? '🔇 声音关' : '🔔 声音开'
      el.setAttribute('aria-pressed', String(!state.muted))
      tone(660, 0.14)
      break
    }
    case 'topic': {
      state.topic = el.dataset.topic
      renderAsk()
      break
    }
    case 'chip': {
      state.question = el.textContent
      const area = document.querySelector('#question')
      if (area) area.value = state.question
      const counter = document.querySelector('#char-count')
      if (counter) counter.textContent = `${state.question.length}/120`
      if (!state.spreadManual) state.spread = recommendSpread(state.question, state.topic)
      refreshSpreadUI()
      tone(560, 0.1)
      break
    }
    case 'spread': {
      state.spread = el.dataset.spread
      state.spreadManual = true
      refreshSpreadUI()
      tone(500, 0.1)
      break
    }
    case 'draw': {
      if (el.disabled) break
      state.question = (document.querySelector('#question')?.value || '').trim()
      el.disabled = true
      const label = document.querySelector('#draw-label')
      if (label) label.textContent = '正在洗牌…'
      tone(220, 0.3)
      setTimeout(() => { drawCards(); navigate('reading') }, 650)
      break
    }
    case 'reveal': handleReveal(el); break
    case 'clarify': {
      drawClarifier()
      const slot = document.querySelector('#interp-slot')
      if (slot) slot.innerHTML = interpretationMarkup()
      tone(600, 0.16)
      break
    }
    case 'redraw': {
      drawCards()
      renderReading()
      tone(220, 0.3)
      showToast('已重新洗牌，为同一个问题再抽一次')
      break
    }
    case 'restart': navigate('ask'); break
    case 'copy': copyReading(); break
    case 'daily-reveal': handleDailyReveal(el); break
    case 'lib-filter': {
      state.libFilter = el.dataset.filter
      document.querySelectorAll('[data-filter]').forEach(chip => chip.classList.toggle('selected', chip.dataset.filter === state.libFilter))
      const grid = document.querySelector('#lib-grid')
      if (grid) grid.innerHTML = libraryGridMarkup()
      break
    }
    case 'card-open': openCardModal(el.dataset.card); break
    case 'modal-close': closeModal(); break
  }
}

document.addEventListener('click', event => {
  const backdrop = event.target.closest('.modal-backdrop')
  if (backdrop && event.target === backdrop) { closeModal(); return }
  const el = event.target.closest('[data-action]')
  if (el) handleAction(el)
})

document.addEventListener('input', event => {
  if (event.target.id === 'question') {
    state.question = event.target.value
    const counter = document.querySelector('#char-count')
    if (counter) counter.textContent = `${state.question.length}/120`
    if (!state.spreadManual) {
      state.spread = recommendSpread(state.question, state.topic)
      refreshSpreadUI()
    }
  }
  if (event.target.id === 'lib-search') {
    state.libQuery = event.target.value
    const grid = document.querySelector('#lib-grid')
    if (grid) grid.innerHTML = libraryGridMarkup()
  }
})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal()
})

window.addEventListener('hashchange', renderRoute)

renderRoute()
