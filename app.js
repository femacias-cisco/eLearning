const STORAGE_KEY = "barranquismo-lms-state-v1";
const MAX_EXAM_ATTEMPTS = 3;

const courses = [
  {
    id: "fundamentals",
    title: "Canyoning Fundamentals",
    level: "Beginner",
    duration: "3h 45m",
    evaluation: "May 28, 2026",
    outcome: "Build the baseline judgment needed before entering technical canyon sections.",
    skills: ["Hazard reading", "Equipment checks", "Group movement"],
    lessons: [
      {
        id: "hazard-reading",
        title: "Hazard Reading",
        type: "Safety",
        minutes: 28,
        summary:
          "Identify water features, escape options, weather indicators, and terrain constraints before committing to a route.",
        checklist: [
          "Classify hydraulic risk before entering moving water.",
          "Find two exit options from the current canyon section.",
          "Record the weather trigger that cancels the descent."
        ]
      },
      {
        id: "personal-kit",
        title: "Personal Kit Inspection",
        type: "Gear",
        minutes: 34,
        summary:
          "Run a structured check of helmet fit, harness condition, footwear, whistle, thermal protection, and personal tether setup.",
        checklist: [
          "Inspect harness stitching and load-bearing points.",
          "Confirm helmet adjustment before entering the canyon.",
          "Pack emergency thermal protection and signaling tools."
        ]
      },
      {
        id: "group-movement",
        title: "Group Movement",
        type: "Field craft",
        minutes: 41,
        summary:
          "Keep the group compact, communicate clearly in loud water, and protect exposed transitions.",
        checklist: [
          "Assign lead, sweep, and communication roles.",
          "Use a visual signal before each exposed move.",
          "Keep spacing tight enough for supervision."
        ]
      }
    ],
    exam: {
      passingScore: 80,
      questions: [
        {
          id: "fund-q1",
          prompt: "What should cancel a canyon descent before the group starts?",
          options: [
            "A forecasted storm affecting the drainage basin",
            "A student forgetting a packed lunch",
            "A route that has been completed before",
            "A short approach hike"
          ],
          answer: 0
        },
        {
          id: "fund-q2",
          prompt: "Which item is part of a personal canyoning safety check?",
          options: [
            "Helmet fit and chin strap security",
            "Camera battery percentage",
            "Vehicle fuel level",
            "Hotel checkout time"
          ],
          answer: 0
        },
        {
          id: "fund-q3",
          prompt: "Why should the group identify exits before committing to a section?",
          options: [
            "To leave quickly if water, weather, or injury changes the plan",
            "To shorten every descent",
            "To avoid carrying ropes",
            "To remove the need for communication"
          ],
          answer: 0
        },
        {
          id: "fund-q4",
          prompt: "What does a sweep role protect against?",
          options: [
            "Students becoming separated behind the group",
            "The canyon becoming too sunny",
            "Ropes drying too quickly",
            "Too many snacks being carried"
          ],
          answer: 0
        }
      ]
    }
  },
  {
    id: "rope",
    title: "Rope Techniques and Anchors",
    level: "Intermediate",
    duration: "5h 20m",
    evaluation: "June 4, 2026",
    outcome: "Rig clean rope systems for canyoning descents, anchors, and controlled transitions.",
    skills: ["Knots", "Rigging", "Rappel control"],
    lessons: [
      {
        id: "knots",
        title: "Knots and Hitches",
        type: "Ropes",
        minutes: 47,
        summary:
          "Practice canyoning knots, dressed tails, locking hitches, and fast visual inspections before weighting a system.",
        checklist: [
          "Dress and set each knot before loading.",
          "Leave an appropriate tail for the knot type.",
          "Run a partner check before the first rappel."
        ]
      },
      {
        id: "anchor-selection",
        title: "Anchor Selection",
        type: "Rigging",
        minutes: 53,
        summary:
          "Assess bolts, natural anchors, redundancy, rope pull direction, abrasion points, and flood exposure.",
        checklist: [
          "Evaluate anchor quality from more than one angle.",
          "Pad or redirect rope across sharp contact points.",
          "Confirm the pull line cannot enter the main flow."
        ]
      },
      {
        id: "rappel-systems",
        title: "Rappel Systems",
        type: "Descent",
        minutes: 62,
        summary:
          "Build releasable and contingency-ready rope systems for common canyoning descent scenarios.",
        checklist: [
          "Set rope length to the landing zone.",
          "Confirm the brake-hand side before descent.",
          "Prepare a releasable system for novice descents."
        ]
      },
      {
        id: "rope-retrieval",
        title: "Rope Retrieval",
        type: "Transitions",
        minutes: 38,
        summary:
          "Prevent stuck ropes by controlling pull angle, rope path, knot position, and team positioning below the drop.",
        checklist: [
          "Clear students from the fall line before pulling.",
          "Inspect the rope path before final retrieval.",
          "Manage rope bags to prevent downstream loss."
        ]
      }
    ],
    exam: {
      passingScore: 80,
      questions: [
        {
          id: "rope-q1",
          prompt: "What is the safest first response to a sharp rope contact point?",
          options: [
            "Pad, redirect, or rerig before loading the rope",
            "Rappel faster to reduce contact time",
            "Ignore it if the anchor is new",
            "Use a thinner rope"
          ],
          answer: 0
        },
        {
          id: "rope-q2",
          prompt: "Why are releasable systems used with novice descents?",
          options: [
            "They allow the team to lower or manage a stuck student",
            "They make helmets optional",
            "They remove the need for anchor checks",
            "They shorten every rope"
          ],
          answer: 0
        },
        {
          id: "rope-q3",
          prompt: "What should happen before a knot is weighted?",
          options: [
            "It should be dressed, set, and checked",
            "It should be soaked in cold water",
            "It should be hidden inside the rope bag",
            "It should be tied as quickly as possible"
          ],
          answer: 0
        },
        {
          id: "rope-q4",
          prompt: "Where should students stand during rope retrieval?",
          options: [
            "Clear of the fall line and moving rope",
            "Directly below the anchor",
            "In the strongest current",
            "On the rope pile"
          ],
          answer: 0
        }
      ]
    }
  },
  {
    id: "rescue",
    title: "Rescue Operations",
    level: "Advanced",
    duration: "6h 10m",
    evaluation: "June 11, 2026",
    outcome: "Coordinate rescue decisions, patient care, and rope interventions under canyon constraints.",
    skills: ["Incident command", "Water rescue", "Evacuation"],
    lessons: [
      {
        id: "incident-command",
        title: "Incident Command",
        type: "Leadership",
        minutes: 43,
        summary:
          "Stabilize the scene, assign roles, capture timeline notes, and keep communication disciplined during a canyon incident.",
        checklist: [
          "Name an incident lead and communications lead.",
          "Protect the scene before attempting intervention.",
          "Record patient status and decision times."
        ]
      },
      {
        id: "water-rescue",
        title: "Water Rescue",
        type: "Rescue",
        minutes: 58,
        summary:
          "Prioritize low-risk options, throw systems, downstream protection, and controlled contact rescues.",
        checklist: [
          "Choose reach or throw before contact rescue.",
          "Set downstream safety before entering water.",
          "Avoid tethering into strong hydraulics."
        ]
      },
      {
        id: "pickoff",
        title: "Rope Pickoff",
        type: "Technical rescue",
        minutes: 72,
        summary:
          "Plan and execute a controlled pickoff for a suspended student using clear commands and backup options.",
        checklist: [
          "Confirm the rescuer system is independent.",
          "Transfer load before disconnecting the student.",
          "Lower both people through a managed system."
        ]
      },
      {
        id: "evacuation",
        title: "Evacuation Plan",
        type: "Medical",
        minutes: 56,
        summary:
          "Match patient condition, canyon geography, daylight, and available personnel to the evacuation plan.",
        checklist: [
          "Package the patient for cold and wet conditions.",
          "Choose the nearest realistic extraction point.",
          "Brief the group before moving."
        ]
      }
    ],
    exam: {
      passingScore: 80,
      questions: [
        {
          id: "rescue-q1",
          prompt: "What is the first priority during a canyon incident?",
          options: [
            "Stabilize and protect the scene",
            "Move the patient immediately at any cost",
            "Send the fastest student downstream alone",
            "Pack all ropes before assessing risk"
          ],
          answer: 0
        },
        {
          id: "rescue-q2",
          prompt: "Which rescue option should usually be preferred first?",
          options: [
            "Reach or throw from a stable position",
            "Tethered contact rescue in the strongest flow",
            "Swimming without downstream protection",
            "Ignoring the current"
          ],
          answer: 0
        },
        {
          id: "rescue-q3",
          prompt: "What is required before disconnecting a suspended student during a pickoff?",
          options: [
            "A controlled load transfer",
            "Removing the rescuer backup",
            "Cutting the rope without a plan",
            "Dropping unused equipment"
          ],
          answer: 0
        },
        {
          id: "rescue-q4",
          prompt: "What should guide the evacuation plan?",
          options: [
            "Patient condition, canyon geography, daylight, and personnel",
            "Only the shortest map distance",
            "The newest rope in the group",
            "The course title"
          ],
          answer: 0
        }
      ]
    }
  }
];

const roster = [
  { name: "Ana Ruiz", courseId: "fundamentals", practical: "Ready", score: 92 },
  { name: "Mateo Silva", courseId: "rope", practical: "Pending", score: 78 },
  { name: "Lucia Torres", courseId: "rescue", practical: "Review", score: 84 },
  { name: "Daniel Mora", courseId: "fundamentals", practical: "Ready", score: 88 }
];

let state = loadState();
let courseFilter = "all";
let currentExam = null;

const els = {
  courseList: document.querySelector("#course-list"),
  lessonList: document.querySelector("#lesson-list"),
  lessonDetail: document.querySelector("#lesson-detail"),
  activeCourseSummary: document.querySelector("#active-course-summary"),
  dashboardSummary: document.querySelector("#dashboard-summary"),
  dashboardPanels: document.querySelector("#dashboard-panels"),
  dashboardMode: document.querySelector("#dashboard-mode"),
  examShell: document.querySelector("#exam-shell"),
  attemptSummary: document.querySelector("#attempt-summary"),
  status: document.querySelector("#status-message")
};

function loadState() {
  const fallback = {
    role: "student",
    activeCourseId: "fundamentals",
    selectedLessonId: "hazard-reading",
    completedLessons: [],
    examAttempts: {}
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...fallback, ...saved } : fallback;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function activeCourse() {
  return courses.find((course) => course.id === state.activeCourseId) || courses[0];
}

function lessonKey(courseId, lessonId) {
  return `${courseId}:${lessonId}`;
}

function completedCount(course) {
  return course.lessons.filter((lesson) =>
    state.completedLessons.includes(lessonKey(course.id, lesson.id))
  ).length;
}

function courseProgress(course) {
  return Math.round((completedCount(course) / course.lessons.length) * 100);
}

function getAttempts(courseId) {
  return state.examAttempts[courseId] || [];
}

function latestAttempt(courseId) {
  return getAttempts(courseId).at(-1);
}

function allAttempts() {
  return Object.values(state.examAttempts).flat();
}

function formatDate(value) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
}

function pluralize(count, noun) {
  return `${count} ${noun}${count === 1 ? "" : "s"}`;
}

function setStatus(message) {
  els.status.textContent = message;
}

function scrollToSection(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderHeroStats() {
  document.querySelector("#hero-course-count").textContent = courses.length;
  document.querySelector("#hero-lesson-count").textContent = courses.reduce(
    (total, course) => total + course.lessons.length,
    0
  );
}

function renderRoleSwitch() {
  document.querySelectorAll(".role-option").forEach((button) => {
    const isActive = button.dataset.role === state.role;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderCourseCards() {
  const visibleCourses =
    courseFilter === "all" ? courses : courses.filter((course) => course.level === courseFilter);

  els.courseList.innerHTML = visibleCourses
    .map((course) => {
      const progress = courseProgress(course);
      const attempts = getAttempts(course.id);
      const latest = latestAttempt(course.id);
      const isActive = course.id === state.activeCourseId;

      return `
        <article class="course-card${isActive ? " active" : ""}">
          <div>
            <div class="course-meta">
              <span class="pill">${course.level}</span>
              <span class="pill">${course.duration}</span>
              ${
                latest
                  ? `<span class="pill ${latest.passed ? "success" : "danger"}">${latest.score}% latest</span>`
                  : ""
              }
            </div>
            <h3>${course.title}</h3>
            <p>${course.outcome}</p>
          </div>
          <div>
            <div class="progress-label">
              <span>${completedCount(course)} of ${course.lessons.length} lessons</span>
              <span>${progress}%</span>
            </div>
            <div class="progress-track" aria-hidden="true">
              <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
          </div>
          <div class="course-meta" aria-label="Course skills">
            ${course.skills.map((skill) => `<span class="pill">${skill}</span>`).join("")}
          </div>
          <div class="card-actions">
            <button class="button primary" type="button" data-select-course="${course.id}">
              ${isActive ? "Continue course" : "Select course"}
            </button>
            <button class="button quiet" type="button" data-course-exam="${course.id}">
              Exam
            </button>
          </div>
          <p class="section-note">${pluralize(MAX_EXAM_ATTEMPTS - attempts.length, "attempt")} remaining</p>
        </article>
      `;
    })
    .join("");

  els.courseList.querySelectorAll("[data-select-course]").forEach((button) => {
    button.addEventListener("click", () => {
      selectCourse(button.dataset.selectCourse);
      scrollToSection("#learn");
    });
  });

  els.courseList.querySelectorAll("[data-course-exam]").forEach((button) => {
    button.addEventListener("click", () => {
      selectCourse(button.dataset.courseExam);
      scrollToSection("#exams");
    });
  });
}

function selectCourse(courseId) {
  const course = courses.find((candidate) => candidate.id === courseId);
  if (!course) return;

  state.activeCourseId = course.id;
  state.selectedLessonId =
    course.lessons.find((lesson) => !state.completedLessons.includes(lessonKey(course.id, lesson.id)))
      ?.id || course.lessons[0].id;
  currentExam = null;
  saveState();
  renderAll();
  setStatus(`${course.title} selected.`);
}

function renderLessonWorkspace() {
  const course = activeCourse();
  const selectedLesson =
    course.lessons.find((lesson) => lesson.id === state.selectedLessonId) || course.lessons[0];

  state.selectedLessonId = selectedLesson.id;
  saveState();

  const progress = courseProgress(course);
  els.activeCourseSummary.innerHTML = `
    <div class="active-course-title">
      <p class="eyebrow">${course.level}</p>
      <h3>${course.title}</h3>
      <p>${course.outcome}</p>
    </div>
    <div class="progress-label">
      <span>Course progress</span>
      <span>${progress}%</span>
    </div>
    <div class="progress-track" aria-hidden="true">
      <div class="progress-fill" style="width: ${progress}%"></div>
    </div>
  `;

  els.lessonList.innerHTML = course.lessons
    .map((lesson, index) => {
      const isComplete = state.completedLessons.includes(lessonKey(course.id, lesson.id));
      const isSelected = lesson.id === selectedLesson.id;

      return `
        <button class="lesson-button${isSelected ? " active" : ""}" type="button" data-lesson-id="${lesson.id}">
          <strong>${index + 1}. ${lesson.title}</strong>
          <span>${lesson.type} · ${lesson.minutes} min · ${isComplete ? "Complete" : "Open"}</span>
        </button>
      `;
    })
    .join("");

  els.lessonList.querySelectorAll("[data-lesson-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedLessonId = button.dataset.lessonId;
      saveState();
      renderLessonWorkspace();
    });
  });

  const isComplete = state.completedLessons.includes(lessonKey(course.id, selectedLesson.id));
  els.lessonDetail.innerHTML = `
    <div class="lesson-hero">
      <div>
        <p class="eyebrow">${selectedLesson.type}</p>
        <h3>${selectedLesson.title}</h3>
        <p>${selectedLesson.summary}</p>
      </div>
      <span class="pill ${isComplete ? "success" : "warn"}">${isComplete ? "Complete" : "In progress"}</span>
    </div>
    <div class="media-preview" role="img" aria-label="Canyoning training media preview">
      <div>
        <strong>${course.title}</strong>
        <span>${selectedLesson.minutes} minute lesson</span>
      </div>
    </div>
    <h4>Practical checklist</h4>
    <ul class="checklist">
      ${selectedLesson.checklist
        .map((item) => `<li><span class="check-marker" aria-hidden="true">OK</span><span>${item}</span></li>`)
        .join("")}
    </ul>
    <div class="card-actions">
      <button class="button primary" type="button" id="toggle-lesson">
        ${isComplete ? "Reopen lesson" : "Mark complete"}
      </button>
      <button class="button quiet" type="button" id="lesson-exam">Open course exam</button>
    </div>
  `;

  document.querySelector("#toggle-lesson").addEventListener("click", () => {
    toggleLesson(course.id, selectedLesson.id);
  });

  document.querySelector("#lesson-exam").addEventListener("click", () => {
    scrollToSection("#exams");
  });
}

function toggleLesson(courseId, lessonId) {
  const key = lessonKey(courseId, lessonId);
  const isComplete = state.completedLessons.includes(key);
  state.completedLessons = isComplete
    ? state.completedLessons.filter((completedKey) => completedKey !== key)
    : [...state.completedLessons, key];
  saveState();
  renderAll();
  setStatus(isComplete ? "Lesson reopened." : "Lesson marked complete.");
}

function renderDashboard() {
  const course = activeCourse();
  const completed = courses.reduce((total, item) => total + completedCount(item), 0);
  const lessonTotal = courses.reduce((total, item) => total + item.lessons.length, 0);
  const attempts = allAttempts();
  const passedAttempts = attempts.filter((attempt) => attempt.passed);
  const averageScore = attempts.length
    ? Math.round(attempts.reduce((total, attempt) => total + attempt.score, 0) / attempts.length)
    : 0;

  els.dashboardMode.textContent = state.role === "student" ? "Student view" : "Instructor view";

  if (state.role === "instructor") {
    els.dashboardSummary.innerHTML = metricCards([
      ["4", "Active learners"],
      [`${passedAttempts.length}`, "Passed exams"],
      ["3", "Practical checks"],
      [`${courses.length}`, "Courses live"]
    ]);

    els.dashboardPanels.innerHTML = `
      <section class="dashboard-panel">
        <h3>Practical review queue</h3>
        ${roster
          .map((learner) => {
            const learnerCourse = courses.find((item) => item.id === learner.courseId);
            return `
              <div class="queue-row">
                <div>
                  <strong>${learner.name}</strong>
                  <span class="section-note">${learnerCourse.title}</span>
                </div>
                <span class="pill ${learner.practical === "Ready" ? "success" : "warn"}">${learner.practical}</span>
              </div>
            `;
          })
          .join("")}
      </section>
      <section class="dashboard-panel">
        <h3>Course performance</h3>
        <ul class="dashboard-list">
          ${courses
            .map((item) => {
              const itemAttempts = getAttempts(item.id);
              const latest = latestAttempt(item.id);
              return `
                <li>
                  <span>${item.title}</span>
                  <strong>${latest ? `${latest.score}% latest` : `${itemAttempts.length} attempts`}</strong>
                </li>
              `;
            })
            .join("")}
        </ul>
      </section>
    `;
    return;
  }

  els.dashboardSummary.innerHTML = metricCards([
    [`${completed}/${lessonTotal}`, "Lessons complete"],
    [`${courseProgress(course)}%`, "Active course"],
    [`${averageScore}%`, "Exam average"],
    [course.evaluation.replace(", 2026", ""), "Next practical"]
  ]);

  els.dashboardPanels.innerHTML = `
    <section class="dashboard-panel">
      <h3>Course progress</h3>
      <ul class="dashboard-list">
        ${courses
          .map((item) => {
            const progress = courseProgress(item);
            return `
              <li>
                <div>
                  <strong>${item.title}</strong>
                  <div class="progress-label">
                    <span>${completedCount(item)} of ${item.lessons.length} lessons</span>
                    <span>${progress}%</span>
                  </div>
                  <div class="progress-track" aria-hidden="true">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                  </div>
                </div>
              </li>
            `;
          })
          .join("")}
      </ul>
    </section>
    <section class="dashboard-panel">
      <h3>Recent grades</h3>
      ${attempts.length ? renderGradeRows(attempts) : `<div class="empty-state">No exam attempts yet.</div>`}
    </section>
    <section class="dashboard-panel">
      <h3>Practical evaluations</h3>
      <ul class="dashboard-list">
        ${courses
          .map(
            (item) => `
              <li>
                <span>${item.title}</span>
                <strong>${item.evaluation}</strong>
              </li>
            `
          )
          .join("")}
      </ul>
    </section>
    <section class="dashboard-panel">
      <h3>Certification status</h3>
      <p>${certificationMessage(completed, lessonTotal, passedAttempts.length)}</p>
      <div class="course-meta">
        <span class="pill ${completed === lessonTotal ? "success" : "warn"}">Lessons</span>
        <span class="pill ${passedAttempts.length >= courses.length ? "success" : "warn"}">Exams</span>
        <span class="pill warn">Practical</span>
      </div>
    </section>
  `;
}

function metricCards(items) {
  return items
    .map(
      ([value, label]) => `
        <article class="metric-card">
          <strong>${value}</strong>
          <span>${label}</span>
        </article>
      `
    )
    .join("");
}

function renderGradeRows(attempts) {
  return attempts
    .slice()
    .reverse()
    .map((attempt) => {
      const course = courses.find((item) => item.id === attempt.courseId);
      return `
        <div class="grade-row">
          <div>
            <strong>${course?.title || "Course exam"}</strong>
            <span class="section-note">${formatDate(attempt.date)}</span>
          </div>
          <span class="pill ${attempt.passed ? "success" : "danger"}">${attempt.score}%</span>
        </div>
      `;
    })
    .join("");
}

function certificationMessage(completed, lessonTotal, passedCount) {
  if (completed === lessonTotal && passedCount >= courses.length) {
    return "Online requirements are complete. Schedule the final practical assessment.";
  }

  return "Complete all lessons and pass each course exam before the final practical assessment.";
}

function renderExam() {
  const course = activeCourse();
  const attempts = getAttempts(course.id);
  const attemptsRemaining = MAX_EXAM_ATTEMPTS - attempts.length;
  const latest = latestAttempt(course.id);

  els.attemptSummary.textContent = `${pluralize(attemptsRemaining, "attempt")} remaining`;

  if (currentExam && currentExam.courseId === course.id) {
    els.examShell.innerHTML = `
      <form id="exam-form">
        <div class="exam-meta">
          <span class="pill">${course.title}</span>
          <span class="pill">${course.exam.passingScore}% passing score</span>
          <span class="pill">${pluralize(attemptsRemaining, "attempt")} remaining</span>
        </div>
        ${currentExam.questions
          .map(
            (question, questionIndex) => `
              <fieldset class="question">
                <legend>${questionIndex + 1}. ${question.prompt}</legend>
                <div class="option-list">
                  ${question.options
                    .map(
                      (option, optionIndex) => `
                        <label class="option">
                          <input
                            type="radio"
                            name="${question.id}"
                            value="${optionIndex}"
                            ${currentExam.answers[question.id] === optionIndex ? "checked" : ""}
                          />
                          <span>${option}</span>
                        </label>
                      `
                    )
                    .join("")}
                </div>
              </fieldset>
            `
          )
          .join("")}
        <p class="section-note" id="exam-error"></p>
        <div class="exam-actions">
          <button class="button primary" type="submit">Submit exam</button>
          <button class="button quiet" type="button" id="cancel-exam">Cancel</button>
        </div>
      </form>
    `;

    document.querySelector("#exam-form").addEventListener("change", (event) => {
      if (event.target.matches('input[type="radio"]')) {
        currentExam.answers[event.target.name] = Number(event.target.value);
      }
    });

    document.querySelector("#exam-form").addEventListener("submit", submitExam);
    document.querySelector("#cancel-exam").addEventListener("click", () => {
      currentExam = null;
      renderExam();
      setStatus("Exam cancelled.");
    });
    return;
  }

  els.examShell.innerHTML = `
    <div class="exam-intro">
      <div>
        <p class="eyebrow">${course.level} exam</p>
        <h3>${course.title}</h3>
        <p>${course.outcome}</p>
      </div>
      <div class="exam-meta">
        <span class="pill">${course.exam.questions.length} randomized questions</span>
        <span class="pill">${course.exam.passingScore}% passing score</span>
        <span class="pill ${attemptsRemaining > 0 ? "warn" : "danger"}">${pluralize(attemptsRemaining, "attempt")} remaining</span>
        ${
          latest
            ? `<span class="pill ${latest.passed ? "success" : "danger"}">Latest ${latest.score}%</span>`
            : ""
        }
      </div>
      <div class="exam-actions">
        <button class="button primary" type="button" id="start-exam" ${attemptsRemaining <= 0 ? "disabled" : ""}>
          ${latest?.passed ? "Retake exam" : "Start exam"}
        </button>
        <button class="button quiet" type="button" id="exam-course">Review lessons</button>
      </div>
      ${attempts.length ? `<div><h4>Attempt history</h4>${renderGradeRows(attempts)}</div>` : ""}
    </div>
  `;

  document.querySelector("#start-exam")?.addEventListener("click", startExam);
  document.querySelector("#exam-course").addEventListener("click", () => {
    scrollToSection("#learn");
  });
}

function startExam() {
  const course = activeCourse();
  const attemptsRemaining = MAX_EXAM_ATTEMPTS - getAttempts(course.id).length;

  if (attemptsRemaining <= 0) {
    setStatus("No exam attempts remain for this course.");
    return;
  }

  currentExam = {
    courseId: course.id,
    questions: shuffle(course.exam.questions),
    answers: {}
  };

  renderExam();
  setStatus(`${course.title} exam started.`);
}

function submitExam(event) {
  event.preventDefault();

  const unanswered = currentExam.questions.filter(
    (question) => currentExam.answers[question.id] === undefined
  );

  if (unanswered.length) {
    document.querySelector("#exam-error").textContent = "Answer every question before submitting.";
    setStatus("Answer every question before submitting.");
    return;
  }

  const course = activeCourse();
  const correct = currentExam.questions.filter(
    (question) => currentExam.answers[question.id] === question.answer
  ).length;
  const score = Math.round((correct / currentExam.questions.length) * 100);
  const record = {
    id: `${Date.now()}`,
    courseId: course.id,
    score,
    correct,
    total: currentExam.questions.length,
    passed: score >= course.exam.passingScore,
    date: new Date().toISOString()
  };

  state.examAttempts[course.id] = [...getAttempts(course.id), record];
  currentExam = null;
  saveState();
  renderAll();
  setStatus(`Exam submitted. Score ${score} percent.`);
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function resetDemoData() {
  if (!window.confirm("Reset local demo progress and exam attempts?")) return;

  state = {
    role: state.role,
    activeCourseId: "fundamentals",
    selectedLessonId: "hazard-reading",
    completedLessons: [],
    examAttempts: {}
  };
  currentExam = null;
  saveState();
  renderAll();
  setStatus("Demo data reset.");
}

function bindStaticEvents() {
  document.querySelector("#start-learning").addEventListener("click", () => {
    scrollToSection("#courses");
  });

  document.querySelector("#jump-exam").addEventListener("click", () => {
    scrollToSection("#exams");
  });

  document.querySelector("#reset-progress").addEventListener("click", resetDemoData);

  document.querySelectorAll(".role-option").forEach((button) => {
    button.addEventListener("click", () => {
      state.role = button.dataset.role;
      saveState();
      renderAll();
      setStatus(`${button.textContent.trim()} view selected.`);
    });
  });

  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      courseFilter = button.dataset.filter;
      document.querySelectorAll(".filter-chip").forEach((chip) => {
        const isActive = chip === button;
        chip.classList.toggle("active", isActive);
        chip.setAttribute("aria-pressed", String(isActive));
      });
      renderCourseCards();
    });
  });
}

function renderAll() {
  renderHeroStats();
  renderRoleSwitch();
  renderCourseCards();
  renderLessonWorkspace();
  renderDashboard();
  renderExam();
}

bindStaticEvents();
renderAll();
