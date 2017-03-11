var express = require('express');
var router = express.Router();

/*scheduling the project by genetic algorithm*/
router.get('/schedule', function(req, res) {
	let classrooms = JSON.parse(req.query.classrooms);
	let projects = JSON.parse(req.query.projects);
	let locks = JSON.parse(req.query.locks);
	let acceptions = JSON.parse(req.query.acceptions);
	let ranks = JSON.parse(req.query.ranks);
	let ga = new geneticAlgorithm();
	ga.initial(classrooms, projects, locks, acceptions, ranks);
	for(let i=0; i<100; i++) {
		ga.crossover();
		ga.selections();
		ga.mutation();
	}
	let rs = ga.getElite();
	let stages = clean(rs.stages);
	res.status(200).json({score: rs.score, stages: stages, process: rs.process});
});

/*scheduling the project by human*/
router.get('/test', function(req, res) {
	let projects = JSON.parse(req.query.projects);
	let locks = JSON.parse(req.query.locks);
	let acceptions = JSON.parse(req.query.acceptions);
	let stages = [
		[
			{
				"project":
				{
					"name": "Schooling fish",
    				"professor": "陳建宏",
    				"teacher": ["余菁蓉", "王育民", "陳小芬"]
				},
				"teachers":
				[
					{
						"name":"洪嘉良",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"王育民",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"陳小芬",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					}
				]
			},
			{
				"project":
				{
					"name": "Cheese 老師",
				    "professor": "陳建宏",
				    "teacher": ["尹邦嚴", "黃俊哲", "陳小芬"]
				},
				"teachers":
				[
					{
						"name":"陳彥錚",
						"first":true,
						"second":false,
						"third":false,
						"fourth":true
					},
					{
						"name":"尹邦嚴",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"俞旭昇",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					}
				]
			},
			{
				"project":
				{
					"name": "Arduino 遠端農業監控系統",
				    "professor": "戴榮賦",
				    "teacher": ["簡宏宇", "俞旭昇", "姜美玲"]
				},
				"teachers":
				[
					{
						"name":"姜美玲",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"游子宜",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"簡宏宇",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					}
				]
			}
		],
		[
			{
				"project":
				{
					"name":"Let's Q&A",
					"professor":"洪嘉良",
					"teacher":["余菁蓉","王育民","陳建宏"]
				},
				"teachers":
				[
					{
						"name":"王育民",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"黃俊哲",
						"first":true,
						"second":true,
						"third":true,
						"fourth":false
					},
					{
						"name":"余菁蓉",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					}
				]
			},
			{
				"project":
				{
					"name": "RunningX",
				    "professor": "俞旭昇",
				    "teacher": ["簡宏宇", "洪嘉良", "戴榮賦"]
				},"teachers":
				[
					{
						"name":"洪嘉良",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"戴榮賦",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"陳建宏",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					}
				]
			},
			{
				"project":
				{
					"name": "應用無人載具進行空氣品質調查",
				    "professor": "戴榮賦",
				    "teacher": ["簡宏宇", "俞旭昇", "姜美玲"]
				},
				"teachers":
				[
					{
						"name":"簡宏宇",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"俞旭昇",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"姜美玲",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					}
				]
			}
		],
		[
			{
				"project":
				{
					"name": "TBS 一起來 Share Share 共享平台",
				    "professor": "陳小芬",
				    "teacher": ["黃俊哲", "洪嘉良", "陳建宏"]
				},
				"teachers":
				[
					{
						"name":"余菁蓉",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"洪嘉良",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"黃俊哲",
						"first":true,
						"second":true,
						"third":true,
						"fourth":false
					}
				]
			},
			{
				"project":
				{
					"name": "好食刻餐飲共享平台",
				    "professor": "陳小芬",
				    "teacher": ["陳彥錚", "王育民", "陳建宏"]
				},
				"teachers":
				[
					{
						"name":"陳建宏",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"王育民",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"戴榮賦",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					}
				]
			},
			{
				"project":
				{
					"name": "以物聯網為基礎建構魚菜共生系統暨資料分析共享平台",
				    "professor": "簡宏宇",
				    "teacher": ["尹邦嚴", "俞旭昇", "戴榮賦"]
				},
				"teachers":
				[
					{
						"name":"尹邦嚴",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"俞旭昇",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"林美",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					}
				]
			}
		],
		[
			{
				"project":
				{
					"name": "埔里區域 PM2.5 低階感測器數據分析",
				    "professor": "尹邦嚴",
				    "teacher": ["游子宜", "洪嘉良", "戴榮賦"]
				},
				"teachers":
				[
					{
						"name":"簡宏宇",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"游子宜",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"戴榮賦",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					}
				]
			},
			{
				"project":
				{
					"name": "上路有三寶安全不能少",
				    "professor": "簡宏宇",
				    "teacher": ["尹邦嚴", "陳彥錚", "陳小芬"]
				},
				"teachers":
				[
					{
						"name":"陳建宏",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"陳小芬",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					},
					{
						"name":"林美",
						"first":true,
						"second":true,
						"third":true,
						"fourth":true
					}
				]
			}
		]
	];
	let f = fitness(stages, acceptions, projects, locks);
	stages = clean(stages);
	res.status(200).json({score: f.score, stages: stages, process: f.process});

});

function geneticAlgorithm() {
	this.classroom = [];
	this.project = [];
	this.lock = [];
	this.acception = [];
	this.rank = [];
	this.generations = [];
	this.stageStruture = null;
	this.best = null;
	this.initial = function (classroom, project, lock, acception, rank) {
		this.classroom = classroom;
		this.project = project;
		this.lock = lock;
		this.acception = acception;
		this.rank = rank;
		//initial 10 generations
		this.stageStruture = fixedProject(this.project, this.classroom);
		for(let i=0; i<10; i++){
			let g = putTeacher(this.stageStruture, this.acception);
			let f = fitness(g, this.acception, this.project, this.lock);
			this.generations.push({stages: g, score: f.score, process: f.process});
		}

		this.generations.sort(function(a, b) {
			return b.score - a.score;
		});
		this.best = this.generations[0];

	};
	this.crossover = function() {
		//initialize parent generation value and avoid overriding
		//original generation value
		//father mean the best one
		//mother mean the second
		let father = this.generations[this.generations.length-1].stages.slice();
		let tmp = this.generations[this.generations.length-2].stages.slice();
		let mother = tmp[0].concat(tmp[1], tmp[2], tmp[3]);
		//take stage structure and a half of project teachers'
		//combination from father
		//take a half of project teachers' combination from mother
		let r = [0, 1, 2, 3];
		r = randomArray(r);
		let c1 = r.pop();
		let c2 = r.pop();
		for(let i=0; i<father[c1].length; i++) {
			for(let j=0; j<mother.length; j++) {
				if(father[c1][i].project.name == mother[j].project.name) {
					father[c1][i].teachers = mother[j].teachers;
				}
			}
		}
		for(let i=0; i<father[c2].length; i++) {
			for(let j=0; j<mother.length; j++) {
				if(father[c2][i].project.name == mother[j].project.name) {
					father[c2][i].teachers = mother[j].teachers;
				}
			}
		}
		let f = fitness(father, this.acception, this.project, this.lock);
		this.generations.push({stages: father, score: f.score, process: f.process});
	};
	this.mutation =  function() {
		//set the best one and reset all generation
		this.generations.sort(function(a, b) {
			return b.score - a.score;
		});
		this.best = this.best.score > this.generations[0].score ? this.best : this.generations[0];
		this.stageStruture = fixedProject(this.project, this.classroom);
		this.generations = [];
		for(let i=0; i<10; i++){
			let g = putTeacher(this.stageStruture, this.acception);
			let f = fitness(g, this.acception, this.project, this.lock);
			this.generations.push({stages: g, score: f.score, process: f.process});
		}
	};
	this.selections = function() {
		//sort the array by generation's fitness ascending
		this.generations.sort(function(a, b) {
			return a.score - b.score;
		});
		//abandon the worse one
		this.generations.pop();
	};
	this.getElite = function() {
		return this.best;
	}
}

/*fixed the project into available classroom*/
function fixedProject(project, classroom) {
	//the project display in the specific time, and the place call stage
	//divide projects into four array accroding to time segment
	let stages1 = [];
	let stages2 = [];
	let stages3 = [];
	let stages4 = [];
	//clone the project array to avoid editing original variable
	let pj = project.slice();
	//random project array
	pj = randomArray(pj);
	//fixed the project into classroom
	for(let i=0; i<classroom.length/4; i++) {
		if(classroom[i].available) {
			let stage = {
				project: pj.shift(),
				teachers: []
			};
			stages1.push(stage);
		}
	}
	for(let i=classroom.length/4; i<(classroom.length/4)*2; i++) {
		if(classroom[i].available) {
			let stage = {
				project: pj.shift(),
				teachers: []
			};
			stages2.push(stage);
		}
	}
	for(let i=(classroom.length/4)*2; i<(classroom.length/4)*3; i++) {
		if(classroom[i].available) {
			let stage = {
				project: pj.shift(),
				teachers: []
			};
			stages3.push(stage);
		}
	}
	for(let i=(classroom.length/4)*3; i<classroom.length; i++) {
		if(classroom[i].available) {
			let stage = {
				project: pj.shift(),
				teachers: []
			};
			stages4.push(stage);
		}
	}
	return [stages1, stages2, stages3, stages4];
}

/*put the teacher into stage*/
function putTeacher(generation, acception) {
	let stages1 = generation[0];
	let stages2 = generation[1];
	let stages3 = generation[2];
	let stages4 = generation[3];
	//put teacher into ever stage set a condition to avoid the
	//reviewed teacher is project's professor
	//use one teachers' array in one time segment avoid the same
	//teacher showing up in same project or in same time segment
	//find the first reviewed professor and make them be easily selected
	let ts = randomArray(JSON.parse(JSON.stringify(acception)));
	for(let i=0; i<stages1.length; i++) {
		let c = 0;
		stages1[i].teachers = [];
		while(c < 3) {
			for(let j=0; j<3; j++) {
				let tts = JSON.parse(JSON.stringify(ts));
				let pos = tts.map(function(e) { return e.name; }).indexOf(stages1[i].project.teacher[j]);
				if(pos > -1) {
					let tmp = ts[0];
					ts[0] = ts[pos];
					ts[pos] = tmp;
					break;
				}
			}
			if(stages1[i].project.professor == ts[0].name) {
				stages1[i].teachers.push(ts[1]);
				ts.splice(1, 1);
			} else {
				stages1[i].teachers.push(ts.shift());
			}
			c++;
		}
	}
	ts = randomArray(JSON.parse(JSON.stringify(acception)));
	for(let i=0; i<stages2.length; i++) {
		let c = 0;
		stages2[i].teachers = [];
		while(c < 3) {
			for(let j=0; j<3; j++) {
				let tts = JSON.parse(JSON.stringify(ts));
				let pos = tts.map(function(e) { return e.name; }).indexOf(stages2[i].project.teacher[j]);
				if(pos > -1) {
					let tmp = ts[0];
					ts[0] = ts[pos];
					ts[pos] = tmp;
					break;
				}
			}
			if(stages2[i].project.professor == ts[0].name) {
				stages2[i].teachers.push(ts[1]);
				ts.splice(1, 1);
			} else {
				stages2[i].teachers.push(ts.shift());
			}
			c++;
		}
	}
	ts = randomArray(JSON.parse(JSON.stringify(acception)));
	for(let i=0; i<stages3.length; i++) {
		let c = 0;
		stages3[i].teachers = [];
		while(c < 3) {
			for(let j=0; j<3; j++) {
				let tts = JSON.parse(JSON.stringify(ts));
				let pos = tts.map(function(e) { return e.name; }).indexOf(stages3[i].project.teacher[j]);
				if(pos > -1) {
					let tmp = ts[0];
					ts[0] = ts[pos];
					ts[pos] = tmp;
					break;
				}
			}
			if(stages3[i].project.professor == ts[0].name) {
				stages3[i].teachers.push(ts[1]);
				ts.splice(1, 1);
			} else {
				stages3[i].teachers.push(ts.shift());
			}
			c++;
		}
	}
	ts = randomArray(JSON.parse(JSON.stringify(acception)));
	for(let i=0; i<stages4.length; i++) {
		let c = 0;
		stages4[i].teachers = [];
		while(c < 3) {
			for(let j=0; j<3; j++) {
				let tts = JSON.parse(JSON.stringify(ts));
				let pos = tts.map(function(e) { return e.name; }).indexOf(stages4[i].project.teacher[j]);
				if(pos > -1) {
					let tmp = ts[0];
					ts[0] = ts[pos];
					ts[pos] = tmp;
					break;
				}
			}
			if(stages4[i].project.professor == ts[0].name) {
				stages4[i].teachers.push(ts[1]);
				ts.splice(1, 1);
			} else {
				stages4[i].teachers.push(ts.shift());
			}
			c++;
		}
	}
	return [stages1, stages2, stages3, stages4];
}

/*calculate the fitness of the generation*/
function fitness(generation, acception, project, lock) {
	let stages1 = generation[0];
	let stages2 = generation[1];
	let stages3 = generation[2];
	let stages4 = generation[3];
	let score = 0;
	let process = [];
	//initialize the rank of leading and reviewing quantity
	let leadingRank = [];
	let reviewingRank = [];
	for(let i=0; i<acception.length; i++) {
		leadingRank.push({name: acception[i].name, quantity: 0, rank: 0});
		reviewingRank.push({name: acception[i].name, quantity: 0, rank: 0});
	}
	for(let i=0; i<project.length; i++) {
		for(let j=0; j<leadingRank.length; j++) {
			leadingRank[j].quantity = (project[i].professor == leadingRank[j].name) ? leadingRank[j].quantity+1 : leadingRank[j].quantity;
		}
	}
	//regulation1: give the 50 points of penalty when distributed
	//teacher in unavailable time segment
	//regulation2: give the 50 points of penalty when distributed
	//teachers having heart lock show up in same project
	//regulation3: give 10 point of bonus when the sorting rank
	//of the teacher's reviewing (project) quantity is same
	//with the rank of the teacher's leading (project) quantity
	//and vice versa
	//regulation4: give the 10 points of bonus when distributed
	//teacher is the project's first reviewed teacher
	let r1 = 50;
	let r2 = 50;
	let r3 = 10;
	let r4 = 10;
	for(let i=0; i<stages1.length; i++) {
		for(let j=0; j<3; j++) {
			score = stages1[i].teachers[j].first ? score : score-r1;
			if(!stages1[i].teachers[j].first) process.push("first time segment "+stages1[i].teachers[j].name+" isn't available");
			for(let k=0; k<lock.length; k++) {
				if(stages1[i].teachers[j].name == lock[k].a) {
					for(let l=j+1; l<3; l++) {
						score = (stages1[i].teachers[l].name == lock[k].b) ? score-r2 : score;
						if(stages1[i].teachers[l].name == lock[k].b) process.push("first time segment "+stages1[i].teachers[j].name+" show up with "+stages1[i].teachers[l].name);
					}
				}
			}
			for(let k=0; k<reviewingRank.length; k++) {
				reviewingRank[k].quantity = (stages1[i].teachers[j].name == reviewingRank[k].name) ? reviewingRank[k].quantity+1 : reviewingRank[k].quantity;
			}
			if(stages1[i].project.teacher.indexOf(stages1[i].teachers[j].name) > -1) score += r4;
		}
	}
	for(let i=0; i<stages2.length; i++) {
		for(let j=0; j<3; j++) {
			score = stages2[i].teachers[j].second ? score : score-r1;
			if(!stages2[i].teachers[j].second) process.push("second time segment "+stages2[i].teachers[j].name+" isn't available");
			for(let k=0; k<lock.length; k++) {
				if(stages2[i].teachers[j].name == lock[k].a) {
					for(let l=j+1; l<3; l++) {
						score = (stages2[i].teachers[l].name == lock[k].b) ? score-r2 : score;
						if(stages2[i].teachers[l].name == lock[k].b) process.push("second time segment "+stages2[i].teachers[j].name+" show up with "+stages2[i].teachers[l].name);
					}
				}
			}
			for(let k=0; k<reviewingRank.length; k++) {
				reviewingRank[k].quantity = (stages2[i].teachers[j].name == reviewingRank[k].name) ? reviewingRank[k].quantity+1 : reviewingRank[k].quantity;
			}
			if(stages2[i].project.teacher.indexOf(stages2[i].teachers[j].name) > -1) score += r4;
		}
	}
	for(let i=0; i<stages3.length; i++) {
		for(let j=0; j<3; j++) {
			score = stages3[i].teachers[j].third ? score : score-r1;
			if(!stages3[i].teachers[j].third) process.push("third time segment "+stages3[i].teachers[j].name+" isn't available");
			for(let k=0; k<lock.length; k++) {
				if(stages3[i].teachers[j].name == lock[k].a) {
					for(let l=j+1; l<3; l++) {
						score = (stages3[i].teachers[l].name == lock[k].b) ? score-r2 : score;
						if(stages3[i].teachers[l].name == lock[k].b) process.push("third time segment "+stages3[i].teachers[j].name+" show up with "+stages3[i].teachers[l].name);
					}
				}
			}
			for(let k=0; k<reviewingRank.length; k++) {
				reviewingRank[k].quantity = (stages3[i].teachers[j].name == reviewingRank[k].name) ? reviewingRank[k].quantity+1 : reviewingRank[k].quantity;
			}
			if(stages3[i].project.teacher.indexOf(stages3[i].teachers[j].name) > -1) score += r4;
		}
	}
	for(let i=0; i<stages4.length; i++) {
		for(let j=0; j<3; j++) {
			score = stages4[i].teachers[j].fourth ? score : score-r1;
			if(!stages4[i].teachers[j].fourth) process.push("fourth time segment "+stages4[i].teachers[j].name+" isn't available");
			for(let k=0; k<lock.length; k++) {
				if(stages4[i].teachers[j].name == lock[k].a) {
					for(let l=j+1; l<3; l++) {
						score = (stages4[i].teachers[l].name == lock[k].b) ? score-r2 : score;
						if(stages4[i].teachers[l].name == lock[k].b) process.push("fourth time segment "+stages4[i].teachers[j].name+" show up with "+stages4[i].teachers[l].name);
					}
				}
			}
			for(let k=0; k<reviewingRank.length; k++) {
				reviewingRank[k].quantity = (stages4[i].teachers[j].name == reviewingRank[k].name) ? reviewingRank[k].quantity+1 : reviewingRank[k].quantity;
			}
			if(stages4[i].project.teacher.indexOf(stages4[i].teachers[j].name) > -1) score += r4;
		}
	}
	reviewingRank.sort(function(a, b) {
		return b.quantity - a.quantity;
	});
	let r = 0;
	for(let i=0; i<reviewingRank.length; i++) {
		reviewingRank[i].rank = (i === reviewingRank.length-1) ? r : (reviewingRank[i].quantity > reviewingRank[i+1].quantity) ? r++ : r;
	}
	leadingRank.sort(function(a, b) {
		return b.quantity - a.quantity;
	});
	r = 0;
	for(let i=0; i<leadingRank.length; i++) {
		leadingRank[i].rank = (i === leadingRank.length-1) ? r : (leadingRank[i].quantity > leadingRank[i+1].quantity) ? r++ : r;
	}
	reviewingRank = reviewingRank.concat(leadingRank);
	reviewingRank.sort(function(a, b) {
		return b.name.localeCompare(a.name);
	});
	for(let i=0; i<reviewingRank.length; i+=2) {
		if(reviewingRank[i].rank != reviewingRank[i+1].rank) {
			score -= r3;
			process.push(reviewingRank[i].name+" ranking error!")
		} else {
			score += r3;
		}
	}
	return {score: score, process: process};
}

//clean the redundant data
function clean(data) {
	let result = [];
	for(let i=0; i<data[0].length; i++) {
		let t = [];
		for(let j=0; j<data[0][i].teachers.length; j++) {
			t.push(data[0][i].teachers[j].name);
		}
		result.push({project: data[0][i].project.name, teachers: t})
	}
	for(let i=0; i<data[1].length; i++) {
		let t = [];
		for(let j=0; j<data[1][i].teachers.length; j++) {
			t.push(data[1][i].teachers[j].name);
		}
		result.push({project: data[1][i].project.name, teachers: t})
	}
	for(let i=0; i<data[2].length; i++) {
		let t = [];
		for(let j=0; j<data[2][i].teachers.length; j++) {
			t.push(data[2][i].teachers[j].name);
		}
		result.push({project: data[2][i].project.name, teachers: t})
	}
	for(let i=0; i<data[3].length; i++) {
		let t = [];
		for(let j=0; j<data[3][i].teachers.length; j++) {
			t.push(data[3][i].teachers[j].name);
		}
		result.push({project: data[3][i].project.name, teachers: t})
	}
	return result;
}

//the array random method from
//https://github.com/coolaj86/knuth-shuffle
function randomArray(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

module.exports = router;
