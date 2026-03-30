window.onload = function () {
  const btn = document.getElementById('searchBtn');
  const input = document.getElementById('codeInput');

  const characterData = {
    // ====================
    // 1. STSOO 时空特别行动组织
    // ====================
    "SA-4041": {
      org: "STSOO 时空特别行动组织",
      msg: "欢迎 lyz130603",
      level: "A级",
      team: "第4小队",
      no: "1号队员"
    },
    "SA-4046": {
      org: "STSOO 时空特别行动组织",
      msg: "欢迎 zsl166544",
      level: "A级",
      team: "第4小队",
      no: "6号队员"
    },
    "SA-4014": {
      org: "STSOO 时空特别行动组织",
      msg: "对不起，您已离职",
      level: "A级",
      team: "第4小队",
      no: "4号队员"
    },
    "SS-5091": {
      org: "STSOO 时空特别行动组织",
      msg: "欢迎 最高指挥官",
      level: "S级",
      team: "指挥部",
      no: "首席"
    },
    "SS-5092": {
      org: "STSOO 时空特别行动组织",
      msg: "欢迎 副指挥官",
      level: "S级",
      team: "指挥部",
      no: "次席"
    },
    "SB-3056": {
      org: "STSOO 时空特别行动组织",
      msg: "欢迎 Zero",
      level: "B级",
      team: "第3小队",
      no: "6号队员"
    },
    "SA-4027": {
      org: "STSOO 时空特别行动组织",
      msg: "欢迎 Create",
      level: "A级",
      team: "第4小队",
      no: "7号队员"
    },
    "SA-4056": {
      org: "STSOO 时空特别行动组织",
      msg: "欢迎 土的使者",
      level: "A级",
      team: "第4小队",
      no: "6号队员"
    },
  };

  // 点击查询
  btn.addEventListener('click', function () {
    let code = input.value.trim().toUpperCase();
    let data = characterData[code];

    if (!data) {
      alert("【" + code + "】\n不存在该编号");
      return;
    }

    let result =
      `【编号】${code}\n` +
      `【所属组织】${data.org}\n` +
      `【等级】${data.level}\n` +
      `【小队】${data.team}\n` +
      `【编号】${data.no}\n` +
      `【状态】${data.msg}\n\n` +
      `——STT 时空隧道`;

    alert(result);
  });
};
