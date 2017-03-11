/*default data*/
//teacher heart locked relationship
var locks = [];

//available classrooms
var classrooms = [
  {
    room: "管371",
    time: "13:10-14:00",
    available: true
  },
  {
    room: "管260",
    time: "13:10-14:00",
    available: true
  },
  {
    room: "管226",
    time: "13:10-14:00",
    available: true
  },
  {
    room: "管241",
    time: "13:10-14:00",
    available: false
  },
  {
    room: "管371",
    time: "14:10-15:00",
    available: true
  },
  {
    room: "管260",
    time: "14:10-15:00",
    available: true
  },
  {
    room: "管226",
    time: "14:10-15:00",
    available: true
  },
  {
    room: "管241",
    time: "14:10-15:00",
    available: false
  },
  {
    room: "管371",
    time: "15:10-16:00",
    available: true
  },
  {
    room: "管260",
    time: "15:10-16:00",
    available: true
  },
  {
    room: "管226",
    time: "15:10-16:00",
    available: false
  },
  {
    room: "管241",
    time: "15:10-16:00",
    available: true
  },
  {
    room: "管371",
    time: "16:10-17:00",
    available: true
  },
  {
    room: "管260",
    time: "16:10-17:00",
    available: false
  },
  {
    room: "管226",
    time: "16:10-17:00",
    available: false
  },
  {
    room: "管241",
    time: "16:10-17:00",
    available: true
  }
];

//project information(project's name, project's professor, project's first reviewed teacher)
var projects = [
  {
    name: "Schooling fish",
    professor: "陳建宏",
    teacher: ["余菁蓉", "王育民", "陳小芬"]
  },
  {
    name: "Cheese 老師",
    professor: "陳建宏",
    teacher: ["尹邦嚴", "黃俊哲", "陳小芬"]
  },
  {
    name: "Arduino 遠端農業監控系統",
    professor: "戴榮賦",
    teacher: ["簡宏宇", "俞旭昇", "姜美玲"]
  },
  {
    name: "Let's Q&A",
    professor: "洪嘉良",
    teacher: ["余菁蓉", "王育民", "陳建宏"]
  },
  {
    name: "RunningX",
    professor: "俞旭昇",
    teacher: ["簡宏宇", "洪嘉良", "戴榮賦"]
  },
  {
    name: "應用無人載具進行空氣品質調查",
    professor: "戴榮賦",
    teacher: ["簡宏宇", "俞旭昇", "姜美玲"]
  },
  {
    name: "TBS 一起來 Share Share 共享平台",
    professor: "陳小芬",
    teacher: ["黃俊哲", "洪嘉良", "陳建宏"]
  },
  {
    name: "好食刻餐飲共享平台",
    professor: "陳小芬",
    teacher: ["陳彥錚", "王育民", "陳建宏"]
  },
  {
    name: "以物聯網為基礎建構魚菜共生系統暨資料分析共享平台",
    professor: "簡宏宇",
    teacher: ["尹邦嚴", "俞旭昇", "戴榮賦"]
  },
  {
    name: "埔里區域 PM2.5 低階感測器數據分析",
    professor: "尹邦嚴",
    teacher: ["游子宜", "洪嘉良", "戴榮賦"]
  },
  {
    name: "上路有三寶安全不能少",
    professor: "簡宏宇",
    teacher: ["尹邦嚴", "陳彥錚", "陳小芬"]
  }
];

//teacher's available time
var acceptions = [
  {
    name: "余菁蓉",
    first: true,
    second: true,
    third: true,
    fourth: true
  },
  {
    name: "尹邦嚴",
    first: true,
    second: true,
    third: true,
    fourth: true
  },
  {
    name: "陳彥錚",
    first: true,
    second: false,
    third: false,
    fourth: true
  },
  {
    name: "黃俊哲",
    first: true,
    second: true,
    third: true,
    fourth: false
  },
  {
    name: "簡宏宇",
    first: true,
    second: true,
    third: true,
    fourth: true
  },
  {
    name: "王育民",
    first: true,
    second: true,
    third: true,
    fourth: true
  },
  {
    name: "游子宜",
    first: true,
    second: true,
    third: true,
    fourth: true
  },
  {
    name: "俞旭昇",
    first: true,
    second: true,
    third: true,
    fourth: true
  },
  {
    name: "姜美玲",
    first: true,
    second: true,
    third: true,
    fourth: true
  },
  {
    name: "洪嘉良",
    first: true,
    second: true,
    third: true,
    fourth: true
  },
  {
    name: "戴榮賦",
    first: true,
    second: true,
    third: true,
    fourth: true
  },
  {
    name: "陳小芬",
    first: true,
    second: true,
    third: true,
    fourth: true
  },
  {
    name: "陳建宏",
    first: true,
    second: true,
    third: true,
    fourth: true
  }
];

var tmp = [];

//teacher's wished reviewing project rank
var ranks = [];
function setClassroom() {
	$("#ct").show();
	$(".ca").show();
	let rooms = $("#cInput").val().split(',');
	let times = ["13:10-14:00", "14:10-15:00", "15:10-16:00", "16:10-17:00"];
	$("#cth").html("<th>#</th>");
	$("#cStage1").html("<th>"+times[0]+"</th>");
	$("#cStage2").html("<th>"+times[1]+"</th>");
	$("#cStage3").html("<th>"+times[2]+"</th>");
	$("#cStage4").html("<th>"+times[3]+"</th>");
	for(let i=0; i<rooms.length; i++) {
		$("#cth").append("<th>"+rooms[i]+"</th>");
		$("#cStage1").append('<td class="cStage" no="'+parseInt(i)+'"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>');
		$("#cStage2").append('<td class="cStage" no="'+parseInt(rooms.length+i)+'"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>');
		$("#cStage3").append('<td class="cStage" no="'+parseInt(rooms.length*2+i)+'"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>');
		$("#cStage4").append('<td class="cStage" no="'+parseInt(rooms.length*3+i)+'"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>');
	}
	classrooms = [];
	for(let i=0; i<rooms.length*4; i++) {
		classrooms.push({room: rooms[i%rooms.length], time: times[parseInt(i/rooms.length)], available: true});
	}
}

function toggleClassroom() {
	let no = $(this).attr( "no" );
	classrooms[no].available = !classrooms[no].available;
	$(this).html(classrooms[no].available ? '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>' : '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>')
}

function finishClassroom() {
	$('#ss').tab('show');
}

function setProfessor() {
	$("#tt").show();
	$(".ta").show();
	let professors = $("#tInput").val().split(',');
	let times = ["13:10-14:00", "14:10-15:00", "15:10-16:00", "16:10-17:00"];
	$("#tth").html("<th>#</th>");
	$("#tStage1").html("<th>"+times[0]+"</th>");
	$("#tStage2").html("<th>"+times[1]+"</th>");
	$("#tStage3").html("<th>"+times[2]+"</th>");
	$("#tStage4").html("<th>"+times[3]+"</th>");
	for(let i=0; i<professors.length; i++) {
		$("#tth").append("<th>"+professors[i]+"</th>");
		$("#tStage1").append('<td class="tStage" no="'+parseInt(i)+'"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>');
		$("#tStage2").append('<td class="tStage" no="'+parseInt(professors.length+i)+'"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>');
		$("#tStage3").append('<td class="tStage" no="'+parseInt(professors.length*2+i)+'"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>');
		$("#tStage4").append('<td class="tStage" no="'+parseInt(professors.length*3+i)+'"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>');
	}
	acceptions = [];
	for(let i=0; i<professors.length; i++) {
		acceptions.push({name: professors[i%professors.length], first: true, second: true, third: true, fourth: true});
	}
}

function toggleProfessor() {
	let no = $(this).attr( "no" );
	if(parseInt(no/acceptions.length) == 0) {
		acceptions[no%acceptions.length].first = !acceptions[no%acceptions.length].first;
		$(this).html(acceptions[no%acceptions.length].first ? '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>' : '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
	} else if(parseInt(no/acceptions.length) == 1) {
		acceptions[no%acceptions.length].second = !acceptions[no%acceptions.length].second;
		$(this).html(acceptions[no%acceptions.length].second ? '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>' : '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
	} else if(parseInt(no/acceptions.length) == 2) {
		acceptions[no%acceptions.length].third = !acceptions[no%acceptions.length].third;
		$(this).html(acceptions[no%acceptions.length].third ? '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>' : '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
	} else {
		acceptions[no%acceptions.length].fourth = !acceptions[no%acceptions.length].fourth;
		$(this).html(acceptions[no%acceptions.length].fourth ? '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>' : '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
	}
}

function finishProfessor() {
	$('#ts').tab('show');
}

function setProject() {
	$("#pt").show();
	$(".pa").show();
	let professors = $("#tInput").val().split(',');
	let topics = $("#pInput").val().split(',');
	console.log(professors);
	console.log(topics);
	$("#pth").html("<th>#</th>");
	for(let i=0; i<topics.length; i++) {
		$("#pth").append("<th>"+topics[i]+"</th>")
	}
	$("#pt tbody").html('');
	for(let i=0; i<professors.length; i++) {
		$("#pt tbody").append('<tr id="pStage'+i+'"><th>'+professors[i]+'</th></tr>');
		for(let j=0; j<topics.length; j++) {
			$("#pStage"+i).append('<td class="pStage" no="'+parseInt(i*topics.length+j)+'"></td>');
			tmp.push(0);
		}
	}
}

function toggleProject() {
	let no = $(this).attr( "no" );
	tmp[no] = (tmp[no] === 1) ? 2 : 1;
	$(this).html((tmp[no] === 1) ? '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>' : '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
}

function cancelProject() {
	let no = $(this).attr( "no" );
	tmp[no] = 0;
	$(this).html('');
}

function finishProject() {
	let professors = $("#tInput").val().split(',');
	let topics = $("#pInput").val().split(',');
	projects = [];
	for(let i=0; i<topics.length; i++) {
		projects.push({name: topics[i], professor: "", teacher: []});
	}
	for(let i=0; i<tmp.length; i++) {
		if(tmp[i] === 1) {
			projects[i%topics.length].teacher.push(professors[parseInt(i/topics.length)]);
		} if(tmp[i] === 2) {
			projects[i%topics.length].professor = professors[parseInt(i/topics.length)];
		}
	}
	$('#fs').tab('show');
}

function setLock() {
	$("#lt").show();
	$(".la").show();
	let professors = $("#tInput").val().split(',');
	let number = $("#lInput").val();
	let selector = "<select>";
	for(let i=0; i<professors.length; i++) {
		selector += '<option value="'+professors[i]+'">'+professors[i]+'</option>';
	}
	selector += "</select>"
	$("#lt tbody").html('');
	for(let i=0; i<parseInt(number); i++) {
		$("#lt tbody").append('<tr><td id="l'+i+'1">'+selector+'</td><td id="l'+i+'2">'+selector+'</td></tr>');
	}
}

function finishLock() {
	let number = $("#lInput").val();
	locks = [];
	for(let i=0; i<parseInt(number); i++) {
		let pa = $("#l"+i+"1 select").val();
		let pb = $("#l"+i+"2 select").val();
		locks.push({a: pa, b: pb});
	}
	$('#rs').tab('show');
}

function getResult() {
  $("#createRS").prop('disabled', true);
	$.get("/schedule",
		{
			"classrooms": JSON.stringify(classrooms),
			"projects": JSON.stringify(projects),
			"locks": JSON.stringify(locks),
			"acceptions": JSON.stringify(acceptions),
			"ranks": JSON.stringify(ranks)
		},
		function(data, status){
			let rooms = $("#cInput").val().split(',');
			let times = ["13:10-14:00", "14:10-15:00", "15:10-16:00", "16:10-17:00"];
	    $("#score").html(data.score);
	    $("#rth").html("<th>#</th>");
			for(let i=0; i<rooms.length; i++) {
				$("#rth").append("<th>"+rooms[i]+"</th>");
			}
			$("#rStage1").html("<th>"+times[0]+"</th>");
			$("#rStage2").html("<th>"+times[1]+"</th>");
			$("#rStage3").html("<th>"+times[2]+"</th>");
			$("#rStage4").html("<th>"+times[3]+"</th>");
			var c = 0;
	    for(let i=0; i<classrooms.length; i++) {
	    	if(classrooms[i].available) {
	    		let p = "<b>專題題目:</b> "+data.stages[c].project;
          let pj = JSON.parse(JSON.stringify(projects));
	    		pj = pj.filter(p => p.name == data.stages[c].project);
	    		let sty1 = (pj[0].teacher.indexOf(data.stages[c].teachers[0]))>-1 ? 'color:blue;' : '';
	    		let sty2 = (pj[0].teacher.indexOf(data.stages[c].teachers[1]))>-1 ? 'color:blue;' : '';
	    		let sty3 = (pj[0].teacher.indexOf(data.stages[c].teachers[2]))>-1 ? 'color:blue;' : '';
	    		let t = "<br/><b>評審老師:</b><span style='" + sty1 + "'>"
	    				  +data.stages[c].teachers[0]
	    				  +"</span>,<span style='" + sty2 + "'>"
	    				  +data.stages[c].teachers[1]
	    				  +"</span>,<span style='" + sty3 + "'>"
	    				  +data.stages[c].teachers[2] +"</span>";
	    		$( "#rStage" + parseInt(i/4+1) ).append('<td>'+p+t+'</td>');
	    		c++;
	    	} else {
	    		$( "#rStage" + parseInt(i/4+1) ).append('<td></td>');
	    	}
	    }
      let professors = $("#tInput").val().split(',');
      let pNumber = [];
      for(let i=0; i<data.stages.length; i++) {
        for(let j=0; j<3; j++) {
          pNumber[professors.indexOf(data.stages[i].teachers[j])] = pNumber[professors.indexOf(data.stages[i].teachers[j])] ? pNumber[professors.indexOf(data.stages[i].teachers[j])]+1 : 1;
        }
      }
      $("#nth").html('');
      $("#ntd").html('');
      for(let i=0; i<professors.length; i++) {
        $("#nth").append("<th>"+professors[i]+"</th>");
        let num = pNumber[i] || 0;
        $("#ntd").append("<td>"+num+"</td>");
      }
      $("#record").html('');
      for(let i=0; i<data.process.length; i++) {
        $("#record").append("<p>"+data.process[i]+"</p>");
      }
      $("#createRS").prop('disabled', false);
		}
	);
}

function getTest() {
  $("#createTS").prop('disabled', true);
  $.get("/test",
    {
      "projects": JSON.stringify(projects),
      "locks": JSON.stringify(locks),
      "acceptions": JSON.stringify(acceptions)
    },
    function(data, status){
      let rooms = $("#cInput").val().split(',');
      let times = ["13:10-14:00", "14:10-15:00", "15:10-16:00", "16:10-17:00"];
      $("#score").html(data.score);
      $("#rth").html("<th>#</th>");
      for(let i=0; i<rooms.length; i++) {
        $("#rth").append("<th>"+rooms[i]+"</th>");
      }
      $("#rStage1").html("<th>"+times[0]+"</th>");
      $("#rStage2").html("<th>"+times[1]+"</th>");
      $("#rStage3").html("<th>"+times[2]+"</th>");
      $("#rStage4").html("<th>"+times[3]+"</th>");
      var c = 0;
      for(let i=0; i<classrooms.length; i++) {
        if(classrooms[i].available) {
          let p = "<b>專題題目:</b> "+data.stages[c].project;
          let pj = JSON.parse(JSON.stringify(projects));
          pj = pj.filter(p => p.name == data.stages[c].project);
          let sty1 = (pj[0].teacher.indexOf(data.stages[c].teachers[0]))>-1 ? 'color:blue;' : '';
          let sty2 = (pj[0].teacher.indexOf(data.stages[c].teachers[1]))>-1 ? 'color:blue;' : '';
          let sty3 = (pj[0].teacher.indexOf(data.stages[c].teachers[2]))>-1 ? 'color:blue;' : '';
          let t = "<br/><b>評審老師:</b><span style='" + sty1 + "'>"
                +data.stages[c].teachers[0]
                +"</span>,<span style='" + sty2 + "'>"
                +data.stages[c].teachers[1]
                +"</span>,<span style='" + sty3 + "'>"
                +data.stages[c].teachers[2] +"</span>";
          $( "#rStage" + parseInt(i/4+1) ).append('<td>'+p+t+'</td>');
          c++;
        } else {
          $( "#rStage" + parseInt(i/4+1) ).append('<td></td>');
        }
      }
      let professors = $("#tInput").val().split(',');
      let pNumber = [];
      for(let i=0; i<data.stages.length; i++) {
        for(let j=0; j<3; j++) {
          pNumber[professors.indexOf(data.stages[i].teachers[j])] = pNumber[professors.indexOf(data.stages[i].teachers[j])] ? pNumber[professors.indexOf(data.stages[i].teachers[j])]+1 : 1;
        }
      }
      $("#nth").html('');
      $("#ntd").html('');
      for(let i=0; i<professors.length; i++) {
        $("#nth").append("<th>"+professors[i]+"</th>");
        let num = pNumber[i] || 0;
        $("#ntd").append("<td>"+num+"</td>");
      }
      $("#record").html('');
      for(let i=0; i<data.process.length; i++) {
        $("#record").append("<p>"+data.process[i]+"</p>");
      }
      $("#createTS").prop('disabled', false);
    }
  );
}

$(document).ready(function(){
	$("#createCR").click(setClassroom);
	$("#ct").on("click", ".cStage", toggleClassroom);
	$("#nextCR").click(finishClassroom);
	$("#createPF").click(setProfessor);
	$("#tt").on("click", ".tStage", toggleProfessor);
	$("#nextPF").click(finishProfessor);
	$("#createPJ").click(setProject);
	$("#pt").on("click", ".pStage", toggleProject);
	$("#pt").on("dblclick", ".pStage", cancelProject);
	$("#nextPJ").click(finishProject);
	$("#createLC").click(setLock);
	$("#nextLC").click(finishLock);
	$("#createRS").click(getResult);
  $("#createTS").click(getTest);
});
