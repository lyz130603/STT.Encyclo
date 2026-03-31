window.onload = function () {
  const btn = document.getElementById('searchBtn');
  const input = document.getElementById('codeInput');
  const characterData = {
    // ====================
    // 1. STSOO 时空特别行动组织
    // ====================
    "SA-4041": {
      org: "STSOO 时空特别行动组织",
      name: "lyz130603",
      msg: "在职",
      level: "A级",
      team: "第4小队",
      no: "1号队员",
      power: "光",
      job: "世界管理员"
    },
    "SA-4046": {
      org: "STSOO 时空特别行动组织",
      name:"zsl166544",
      msg: "在职",
      level: "A级",
      team: "第4小队",
      no: "6号队员",
      power: "光",
      job: "动画师"
    },
    "SA-4014": {
      org: "STSOO 时空特别行动组织",
      name:"未知",
      msg: "离职",
      level: "A级",
      team: "第4小队",
      no: "4号队员",
      power: "未知",
      job: "世界管理员"
    },
    "SS-5091": {
      org: "STSOO 时空特别行动组织",
      name:"时砚秋",
      msg: "在职",
      level: "S级",
      team: "指挥部",
      no: "首席",
      power: "电",
      job: "指挥官"
    },
    "SS-5092": {
      org: "STSOO 时空特别行动组织",
      name:"周自横",
      msg: "在职",
      level: "S级",
      team: "指挥部",
      no: "次席",
      power: "风",
      job: "副指挥官"
    },
    "SB-3056": {
      org: "STSOO 时空特别行动组织",
      name:"Zero",
      msg: "在职",
      level: "B级",
      team: "第3小队",
      no: "6号队员",
      power: "光",
      job:"队员"
    },
    "SA-4027": {
      org: "STSOO 时空特别行动组织",
      name:"Create",
      msg: "在职",
      level: "A级",
      team: "第4小队",
      no: "7号队员",
      power: "光",
      job: "建筑师"
    },
    "SA-4056": {
      org: "STSOO 时空特别行动组织",
      name:"土的使者",
      msg: "在职",
      level: "A级",
      team: "第4小队",
      no: "6号队员",
      power: "土",
      job: "异能者"
    },
  };
  // 点击查询
  btn.addEventListener('click', function () {
    let code = input.value.trim().toUpperCase();
    let data = characterData[code];
    if (code === "でびるコネクショん") {
     alert("“星”存梦想，创造未来\nWin7之旅，不可陨落");
    }
    
    if (!data) {
      alert("【" + code + "】\n不存在该编号");
      return;
    }

    let result =
      `【编号】${code}\n` +
      `【所属组织】${data.org}\n` +
      `【名字】${data.name}\n` +
      `【等级】${data.level}\n` +
      `【小队】${data.team}\n` +
      `【编号】${data.no}\n` +
      `【元素力】${data.power}\n` +
      `【职位】${data.job}\n` +
      `【状态】${data.msg}\n\n` +
      `——STT 时空隧道`;
    alert(result);
  });
};
