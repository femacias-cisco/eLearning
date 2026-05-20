const LEGACY_STORAGE_KEY = "barranquismo-lms-state-v1";
const STORAGE_KEY = "barranquismo-lms-state-v2";
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

const SUPER_ADMIN_USER = {
  id: "super-admin",
  name: "Super Admin",
  email: "admin@barranquismo.test",
  password: "AdminDemo2026!",
  role: "admin",
  status: "approved",
  createdAt: "2026-05-19T00:00:00.000Z",
  approvedAt: "2026-05-19T00:00:00.000Z",
  approvedBy: "system"
};

const ROLE_LABELS = {
  admin: "Super admin",
  instructor: "Instructor",
  student: "Student"
};

const STATUS_LABELS = {
  approved: "Approved",
  pending: "Pending approval"
};

let memoryStorage = {};
let state = loadState();
let courseFilter = "all";
let currentExam = null;

const els = {
  accountMenu: document.querySelector("#account-menu"),
  accountNote: document.querySelector("#account-note"),
  authShell: document.querySelector("#auth-shell"),
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

function defaultLearningState() {
  return {
    activeCourseId: "fundamentals",
    selectedLessonId: "hazard-reading",
    completedLessons: [],
    examAttempts: {}
  };
}

function readStoredValue(key) {
  try {
    if (typeof localStorage === "undefined") {
      return memoryStorage[key] || null;
    }

    return localStorage.getItem(key);
  } catch {
    return memoryStorage[key] || null;
  }
}

function writeStoredValue(key, value) {
  memoryStorage[key] = value;

  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(key, value);
    }
  } catch {
    // Memory storage keeps the current browser session usable when storage is blocked.
  }
}

function loadState() {
  const fallback = {
    users: [SUPER_ADMIN_USER],
    currentUserId: null,
    learnerProgress: {
      guest: defaultLearningState()
    }
  };

  try {
    const saved = JSON.parse(readStoredValue(STORAGE_KEY) || readStoredValue(LEGACY_STORAGE_KEY));
    if (!saved) return fallback;

    const migratedGuestProgress = {
      activeCourseId: saved.activeCourseId || fallback.learnerProgress.guest.activeCourseId,
      selectedLessonId: saved.selectedLessonId || fallback.learnerProgress.guest.selectedLessonId,
      completedLessons: Array.isArray(saved.completedLessons) ? saved.completedLessons : [],
      examAttempts: saved.examAttempts && typeof saved.examAttempts === "object" ? saved.examAttempts : {}
    };

    const nextState = {
      ...fallback,
      ...saved,
      users: normalizeUsers(saved.users),
      learnerProgress: normalizeLearnerProgress(saved.learnerProgress || { guest: migratedGuestProgress })
    };

    if (!nextState.users.some((user) => user.id === nextState.currentUserId)) {
      nextState.currentUserId = null;
    }

    return nextState;
  } catch {
    return fallback;
  }
}

function saveState() {
  writeStoredValue(STORAGE_KEY, JSON.stringify(state));
}

function normalizeUsers(users = []) {
  const savedAdmin = users.find(
    (user) =>
      user?.id === SUPER_ADMIN_USER.id ||
      String(user?.email || "").toLowerCase() === SUPER_ADMIN_USER.email
  );
  const admin = {
    ...SUPER_ADMIN_USER,
    ...savedAdmin,
    id: SUPER_ADMIN_USER.id,
    email: SUPER_ADMIN_USER.email,
    role: "admin",
    status: "approved",
    password: savedAdmin?.password || SUPER_ADMIN_USER.password
  };
  const seenEmails = new Set([admin.email]);
  const normalizedUsers = [admin];

  users.forEach((user) => {
    if (!user || user.id === SUPER_ADMIN_USER.id) return;

    const email = String(user.email || "").trim().toLowerCase();
    if (!email || seenEmails.has(email)) return;

    const role = ["student", "instructor"].includes(user.role) ? user.role : "student";
    const status = user.status === "approved" ? "approved" : "pending";
    seenEmails.add(email);
    normalizedUsers.push({
      id: user.id || createId("user"),
      name: String(user.name || "New user").trim(),
      email,
      password: String(user.password || ""),
      role,
      status,
      createdAt: user.createdAt || new Date().toISOString(),
      approvedAt: user.approvedAt || null,
      approvedBy: user.approvedBy || null
    });
  });

  return normalizedUsers;
}

function normalizeLearnerProgress(progress = {}) {
  const normalized = {};

  Object.entries(progress).forEach(([key, value]) => {
    normalized[key] = {
      ...defaultLearningState(),
      ...(value || {}),
      completedLessons: Array.isArray(value?.completedLessons) ? value.completedLessons : [],
      examAttempts: value?.examAttempts && typeof value.examAttempts === "object" ? value.examAttempts : {}
    };
  });

  if (!normalized.guest) {
    normalized.guest = defaultLearningState();
  }

  return normalized;
}

function activeCourse() {
  return courses.find((course) => course.id === learningState().activeCourseId) || courses[0];
}

function lessonKey(courseId, lessonId) {
  return `${courseId}:${lessonId}`;
}

function completedCount(course, progress = learningState()) {
  return course.lessons.filter((lesson) =>
    progress.completedLessons.includes(lessonKey(course.id, lesson.id))
  ).length;
}

function courseProgress(course, progress = learningState()) {
  return Math.round((completedCount(course, progress) / course.lessons.length) * 100);
}

function getAttempts(courseId, progress = learningState()) {
  return progress.examAttempts[courseId] || [];
}

function latestAttempt(courseId, progress = learningState()) {
  return getAttempts(courseId, progress).at(-1);
}

function allAttempts(progress = learningState()) {
  return Object.values(progress.examAttempts).flat();
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createId(prefix) {
  if (window.crypto?.randomUUID) {
    return `${prefix}-${window.crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function currentUser() {
  return state.users.find((user) => user.id === state.currentUserId) || null;
}

function userById(userId) {
  return state.users.find((user) => user.id === userId) || null;
}

function roleLabel(role) {
  return ROLE_LABELS[role] || "User";
}

function statusLabel(status) {
  return STATUS_LABELS[status] || "Pending approval";
}

function statusPillClass(status) {
  return status === "approved" ? "success" : "warn";
}

function learningKey() {
  const user = currentUser();
  return user?.role === "student" ? user.id : "guest";
}

function learnerProgressFor(userId) {
  if (!state.learnerProgress[userId]) {
    state.learnerProgress[userId] = defaultLearningState();
  }

  return state.learnerProgress[userId];
}

function learningState() {
  return learnerProgressFor(learningKey());
}

function canTrackLearning() {
  const user = currentUser();
  return user?.role === "student" && user.status === "approved";
}

function canTakeExam() {
  return canTrackLearning();
}

function isApprovedInstructor(user = currentUser()) {
  return user?.role === "instructor" && user.status === "approved";
}

function examGateLabel() {
  const user = currentUser();
  if (!user) return "Sign in required";
  if (user.role === "student") return user.status === "approved" ? "Ready" : "Approval pending";
  return "Student exam only";
}

function trackingGateLabel() {
  const user = currentUser();
  if (!user) return "Sign in to track";
  if (user.role === "student") return user.status === "approved" ? "Ready" : "Approval pending";
  return "Preview only";
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

function renderAccountMenu() {
  const user = currentUser();

  if (!user) {
    els.accountMenu.innerHTML = `
      <button class="button quiet compact" type="button" data-auth-focus="login">Sign in</button>
      <button class="button primary compact" type="button" data-auth-focus="signup">Create account</button>
    `;
    return;
  }

  els.accountMenu.innerHTML = `
    <span class="account-badge">
      <strong>${escapeHtml(user.name)}</strong>
      <small>${roleLabel(user.role)} · ${statusLabel(user.status)}</small>
    </span>
    <button class="button quiet compact" type="button" data-sign-out>Sign out</button>
  `;
}

function renderAuthShell() {
  const user = currentUser();

  if (!user) {
    els.accountNote.textContent = "Signed out";
    els.authShell.innerHTML = `
      <form class="auth-card" id="login-form" novalidate>
        <div>
          <p class="eyebrow">Login</p>
          <h3>Sign in</h3>
        </div>
        <label class="field">
          <span>Email</span>
          <input id="login-email" type="email" name="email" autocomplete="email" required />
        </label>
        <label class="field">
          <span>Password</span>
          <input type="password" name="password" autocomplete="current-password" required />
        </label>
        <p class="form-message" aria-live="polite"></p>
        <button class="button primary" type="submit">Sign in</button>
      </form>

      <form class="auth-card" id="signup-form" novalidate>
        <div>
          <p class="eyebrow">Signup</p>
          <h3>Create account</h3>
        </div>
        <div class="form-grid">
          <label class="field">
            <span>Name</span>
            <input id="signup-name" type="text" name="name" autocomplete="name" required />
          </label>
          <label class="field">
            <span>Role</span>
            <select name="role" required>
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>
          </label>
        </div>
        <label class="field">
          <span>Email</span>
          <input type="email" name="email" autocomplete="email" required />
        </label>
        <label class="field">
          <span>Password</span>
          <input type="password" name="password" autocomplete="new-password" minlength="8" required />
        </label>
        <p class="form-message" aria-live="polite"></p>
        <button class="button primary" type="submit">Create account</button>
      </form>
    `;
    return;
  }

  els.accountNote.textContent = `${roleLabel(user.role)} · ${statusLabel(user.status)}`;
  els.authShell.innerHTML = `
    <article class="auth-card">
      <div>
        <p class="eyebrow">Signed in</p>
        <h3>${escapeHtml(user.name)}</h3>
      </div>
      <div class="course-meta">
        ${roleStatusPills(user)}
      </div>
      <div class="user-meta">
        <span>${escapeHtml(user.email)}</span>
        <span>Joined ${formatDate(user.createdAt)}</span>
      </div>
      <button class="button quiet" type="button" data-sign-out>Sign out</button>
    </article>
    ${renderRoleAccessPanel(user)}
  `;
}

function roleStatusPills(user) {
  return `
    <span class="pill">${roleLabel(user.role)}</span>
    <span class="pill ${statusPillClass(user.status)}">${statusLabel(user.status)}</span>
  `;
}

function renderRoleAccessPanel(user) {
  if (user.role === "admin") {
    const pendingInstructors = usersByRole("instructor", "pending");
    return `
      <article class="auth-card wide-card">
        <div>
          <p class="eyebrow">Approvals</p>
          <h3>Instructor requests</h3>
        </div>
        ${renderUserRows(pendingInstructors, "No instructors waiting for approval.", "Approve instructor")}
      </article>
    `;
  }

  if (user.role === "instructor") {
    const pendingStudents = usersByRole("student", "pending");
    return `
      <article class="auth-card wide-card">
        <div>
          <p class="eyebrow">Approvals</p>
          <h3>Student requests</h3>
        </div>
        ${
          user.status === "approved"
            ? renderUserRows(pendingStudents, "No students waiting for approval.", "Approve student")
            : `<div class="empty-state compact">Instructor approval pending.</div>`
        }
      </article>
    `;
  }

  const activeProgress = learnerProgressFor(user.id);
  const completed = courses.reduce((total, course) => total + completedCount(course, activeProgress), 0);
  const lessonTotal = courses.reduce((total, course) => total + course.lessons.length, 0);

  return `
    <article class="auth-card wide-card">
      <div>
        <p class="eyebrow">Student status</p>
        <h3>${user.status === "approved" ? "Learning access active" : "Approval pending"}</h3>
      </div>
      <div class="progress-label">
        <span>${completed} of ${lessonTotal} lessons</span>
        <span>${Math.round((completed / lessonTotal) * 100)}%</span>
      </div>
      <div class="progress-track" aria-hidden="true">
        <div class="progress-fill" style="width: ${Math.round((completed / lessonTotal) * 100)}%"></div>
      </div>
    </article>
  `;
}

function renderCourseCards() {
  const visibleCourses =
    courseFilter === "all" ? courses : courses.filter((course) => course.level === courseFilter);

  els.courseList.innerHTML = visibleCourses
    .map((course) => {
      const progressState = learningState();
      const progress = canTrackLearning() ? courseProgress(course, progressState) : 0;
      const attempts = getAttempts(course.id);
      const latest = latestAttempt(course.id);
      const isActive = course.id === progressState.activeCourseId;
      const lessonLabel = canTrackLearning()
        ? `${completedCount(course, progressState)} of ${course.lessons.length} lessons`
        : `${course.lessons.length} lessons`;

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
              <span>${lessonLabel}</span>
              <span>${canTrackLearning() ? `${progress}%` : trackingGateLabel()}</span>
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
              ${canTrackLearning() ? (isActive ? "Continue course" : "Select course") : "Preview course"}
            </button>
            <button class="button quiet" type="button" data-course-exam="${course.id}">
              ${canTakeExam() ? "Exam" : "Exam locked"}
            </button>
          </div>
          <p class="section-note">${
            canTakeExam()
              ? `${pluralize(MAX_EXAM_ATTEMPTS - attempts.length, "attempt")} remaining`
              : examGateLabel()
          }</p>
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

  const progress = learningState();
  progress.activeCourseId = course.id;
  progress.selectedLessonId =
    course.lessons.find((lesson) => !progress.completedLessons.includes(lessonKey(course.id, lesson.id)))
      ?.id || course.lessons[0].id;
  currentExam = null;
  saveState();
  renderAll();
  setStatus(`${course.title} selected.`);
}

function renderLessonWorkspace() {
  const course = activeCourse();
  const progress = learningState();
  const selectedLesson =
    course.lessons.find((lesson) => lesson.id === progress.selectedLessonId) || course.lessons[0];

  progress.selectedLessonId = selectedLesson.id;
  saveState();

  const progressPercent = canTrackLearning() ? courseProgress(course, progress) : 0;
  els.activeCourseSummary.innerHTML = `
    <div class="active-course-title">
      <p class="eyebrow">${course.level}</p>
      <h3>${course.title}</h3>
      <p>${course.outcome}</p>
    </div>
    <div class="progress-label">
      <span>Course progress</span>
      <span>${canTrackLearning() ? `${progressPercent}%` : trackingGateLabel()}</span>
    </div>
    <div class="progress-track" aria-hidden="true">
      <div class="progress-fill" style="width: ${progressPercent}%"></div>
    </div>
  `;

  els.lessonList.innerHTML = course.lessons
    .map((lesson, index) => {
      const isComplete = canTrackLearning() && progress.completedLessons.includes(lessonKey(course.id, lesson.id));
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
      progress.selectedLessonId = button.dataset.lessonId;
      saveState();
      renderLessonWorkspace();
    });
  });

  const isComplete = canTrackLearning() && progress.completedLessons.includes(lessonKey(course.id, selectedLesson.id));
  const trackingAction = canTrackLearning()
    ? `
      <button class="button primary" type="button" id="toggle-lesson">
        ${isComplete ? "Reopen lesson" : "Mark complete"}
      </button>
    `
    : currentUser()
      ? `<button class="button primary" type="button" disabled>${trackingGateLabel()}</button>`
      : `<button class="button primary" type="button" data-auth-focus="login">Sign in to track</button>`;

  els.lessonDetail.innerHTML = `
    <div class="lesson-hero">
      <div>
        <p class="eyebrow">${selectedLesson.type}</p>
        <h3>${selectedLesson.title}</h3>
        <p>${selectedLesson.summary}</p>
      </div>
      <span class="pill ${isComplete ? "success" : "warn"}">${
        canTrackLearning() ? (isComplete ? "Complete" : "In progress") : "Preview"
      }</span>
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
      ${trackingAction}
      <button class="button quiet" type="button" id="lesson-exam">Open course exam</button>
    </div>
  `;

  document.querySelector("#toggle-lesson")?.addEventListener("click", () => {
    toggleLesson(course.id, selectedLesson.id);
  });

  document.querySelector("#lesson-exam").addEventListener("click", () => {
    scrollToSection("#exams");
  });
}

function toggleLesson(courseId, lessonId) {
  if (!canTrackLearning()) {
    setStatus("Student approval is required before tracking lessons.");
    return;
  }

  const progress = learningState();
  const key = lessonKey(courseId, lessonId);
  const isComplete = progress.completedLessons.includes(key);
  progress.completedLessons = isComplete
    ? progress.completedLessons.filter((completedKey) => completedKey !== key)
    : [...progress.completedLessons, key];
  saveState();
  renderAll();
  setStatus(isComplete ? "Lesson reopened." : "Lesson marked complete.");
}

function renderDashboard() {
  const user = currentUser();

  if (!user) {
    renderSignedOutDashboard();
    return;
  }

  if (user.role === "admin") {
    renderAdminDashboard();
    return;
  }

  if (user.role === "instructor") {
    renderInstructorDashboard(user);
    return;
  }

  renderStudentDashboard(user);
}

function renderSignedOutDashboard() {
  const lessonTotal = courses.reduce((total, item) => total + item.lessons.length, 0);
  els.dashboardMode.textContent = "Signed out";
  els.dashboardSummary.innerHTML = metricCards([
    [`${courses.length}`, "Courses"],
    [`${lessonTotal}`, "Lessons"],
    [`${MAX_EXAM_ATTEMPTS}`, "Exam attempts"],
    ["Login", "Progress tracking"]
  ]);

  els.dashboardPanels.innerHTML = `
    <section class="dashboard-panel">
      <h3>Account required</h3>
      <p>Sign in or create an account to track lessons, submit exams, and enter approval workflows.</p>
      <button class="button primary" type="button" data-auth-focus="login">Sign in</button>
    </section>
    <section class="dashboard-panel">
      <h3>Catalog preview</h3>
      <ul class="dashboard-list">
        ${courses.map((item) => `<li><span>${item.title}</span><strong>${item.level}</strong></li>`).join("")}
      </ul>
    </section>
  `;
}

function renderAdminDashboard() {
  const pendingInstructors = usersByRole("instructor", "pending");
  const approvedInstructors = usersByRole("instructor", "approved");
  const pendingStudents = usersByRole("student", "pending");
  const approvedStudents = usersByRole("student", "approved");

  els.dashboardMode.textContent = "Super admin view";
  els.dashboardSummary.innerHTML = metricCards([
    [`${pendingInstructors.length}`, "Instructor approvals"],
    [`${approvedInstructors.length}`, "Approved instructors"],
    [`${pendingStudents.length}`, "Pending students"],
    [`${state.users.length}`, "Total users"]
  ]);

  els.dashboardPanels.innerHTML = `
    <section class="dashboard-panel">
      <h3>Instructor approvals</h3>
      ${renderUserRows(pendingInstructors, "No instructors waiting for approval.", "Approve instructor")}
    </section>
    <section class="dashboard-panel">
      <h3>Instructor roster</h3>
      ${renderUserRows(approvedInstructors, "No approved instructors yet.")}
    </section>
    <section class="dashboard-panel">
      <h3>Student status</h3>
      ${renderUserRows([...pendingStudents, ...approvedStudents], "No student accounts yet.")}
    </section>
    <section class="dashboard-panel">
      <h3>Admin account</h3>
      ${renderUserRows([currentUser()], "Admin account unavailable.")}
    </section>
  `;
}

function renderInstructorDashboard(user) {
  const pendingStudents = usersByRole("student", "pending");
  const approvedStudents = usersByRole("student", "approved");
  const attempts = allStudentAttempts();
  const passedAttempts = attempts.filter((attempt) => attempt.passed);

  els.dashboardMode.textContent =
    user.status === "approved" ? "Instructor view" : "Instructor pending approval";

  if (!isApprovedInstructor(user)) {
    els.dashboardSummary.innerHTML = metricCards([
      ["Pending", "Instructor status"],
      [`${courses.length}`, "Courses visible"],
      [`${pendingStudents.length}`, "Students waiting"],
      ["Locked", "Approvals"]
    ]);
    els.dashboardPanels.innerHTML = `
      <section class="dashboard-panel">
        <h3>Approval pending</h3>
        <p>A super admin must approve this instructor account before student approvals are available.</p>
      </section>
      <section class="dashboard-panel">
        <h3>Course preview</h3>
        <ul class="dashboard-list">
          ${courses.map((item) => `<li><span>${item.title}</span><strong>${item.level}</strong></li>`).join("")}
        </ul>
      </section>
    `;
    return;
  }

  els.dashboardSummary.innerHTML = metricCards([
    [`${approvedStudents.length}`, "Approved students"],
    [`${pendingStudents.length}`, "Student approvals"],
    [`${passedAttempts.length}`, "Passed exams"],
    [`${courses.length}`, "Courses live"]
  ]);

  els.dashboardPanels.innerHTML = `
    <section class="dashboard-panel">
      <h3>Student approval queue</h3>
      ${renderUserRows(pendingStudents, "No students waiting for approval.", "Approve student")}
    </section>
    <section class="dashboard-panel">
      <h3>Approved learners</h3>
      ${renderLearnerRows(approvedStudents)}
    </section>
    <section class="dashboard-panel">
      <h3>Course performance</h3>
      <ul class="dashboard-list">
        ${courses
          .map((course) => {
            const courseAttempts = attempts.filter((attempt) => attempt.courseId === course.id);
            const latestScore = courseAttempts.at(-1)?.score;
            return `
              <li>
                <span>${course.title}</span>
                <strong>${latestScore === undefined ? `${courseAttempts.length} attempts` : `${latestScore}% latest`}</strong>
              </li>
            `;
          })
          .join("")}
      </ul>
    </section>
    <section class="dashboard-panel">
      <h3>Recent grades</h3>
      ${attempts.length ? renderGradeRows(attempts, true) : `<div class="empty-state">No student exam attempts yet.</div>`}
    </section>
  `;
}

function renderStudentDashboard(user) {
  const progress = learnerProgressFor(user.id);
  const course = activeCourse();
  const completed = courses.reduce((total, item) => total + completedCount(item, progress), 0);
  const lessonTotal = courses.reduce((total, item) => total + item.lessons.length, 0);
  const attempts = allAttempts(progress);
  const passedAttempts = attempts.filter((attempt) => attempt.passed);
  const averageScore = attempts.length
    ? Math.round(attempts.reduce((total, attempt) => total + attempt.score, 0) / attempts.length)
    : 0;

  if (user.status !== "approved") {
    els.dashboardMode.textContent = "Student pending approval";
    els.dashboardSummary.innerHTML = metricCards([
      ["Pending", "Student status"],
      [`${courses.length}`, "Courses visible"],
      [`${lessonTotal}`, "Lessons locked"],
      ["Locked", "Exams"]
    ]);
    els.dashboardPanels.innerHTML = `
      <section class="dashboard-panel">
        <h3>Approval pending</h3>
        <p>An approved instructor must approve this student account before progress tracking and exams unlock.</p>
      </section>
      <section class="dashboard-panel">
        <h3>Available courses</h3>
        <ul class="dashboard-list">
          ${courses.map((item) => `<li><span>${item.title}</span><strong>${item.level}</strong></li>`).join("")}
        </ul>
      </section>
    `;
    return;
  }

  els.dashboardMode.textContent = "Student view";
  els.dashboardSummary.innerHTML = metricCards([
    [`${completed}/${lessonTotal}`, "Lessons complete"],
    [`${courseProgress(course, progress)}%`, "Active course"],
    [`${averageScore}%`, "Exam average"],
    [course.evaluation.replace(", 2026", ""), "Next practical"]
  ]);

  els.dashboardPanels.innerHTML = `
    <section class="dashboard-panel">
      <h3>Course progress</h3>
      <ul class="dashboard-list">
        ${courses
          .map((item) => {
            const itemProgress = courseProgress(item, progress);
            return `
              <li>
                <div>
                  <strong>${item.title}</strong>
                  <div class="progress-label">
                    <span>${completedCount(item, progress)} of ${item.lessons.length} lessons</span>
                    <span>${itemProgress}%</span>
                  </div>
                  <div class="progress-track" aria-hidden="true">
                    <div class="progress-fill" style="width: ${itemProgress}%"></div>
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

function renderGradeRows(attempts, showLearner = false) {
  return attempts
    .slice()
    .reverse()
    .map((attempt) => {
      const course = courses.find((item) => item.id === attempt.courseId);
      const learner = showLearner ? userById(attempt.userId) : null;
      return `
        <div class="grade-row">
          <div>
            <strong>${course?.title || "Course exam"}</strong>
            <span class="section-note">${
              learner ? `${escapeHtml(learner.name)} · ` : ""
            }${formatDate(attempt.date)}</span>
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

  if (!canTakeExam()) {
    currentExam = null;
    els.attemptSummary.textContent = examGateLabel();
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
          <span class="pill warn">${examGateLabel()}</span>
        </div>
        <div class="exam-actions">
          ${
            currentUser()
              ? `<button class="button primary" type="button" data-scroll-target="#account">Account status</button>`
              : `<button class="button primary" type="button" data-auth-focus="login">Sign in</button>`
          }
          <button class="button quiet" type="button" id="exam-course">Review lessons</button>
        </div>
      </div>
    `;
    document.querySelector("#exam-course").addEventListener("click", () => {
      scrollToSection("#learn");
    });
    return;
  }

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
  if (!canTakeExam()) {
    setStatus("Approved student access is required before taking exams.");
    return;
  }

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

  if (!canTakeExam()) {
    setStatus("Approved student access is required before submitting exams.");
    currentExam = null;
    renderExam();
    return;
  }

  const unanswered = currentExam.questions.filter(
    (question) => currentExam.answers[question.id] === undefined
  );

  if (unanswered.length) {
    document.querySelector("#exam-error").textContent = "Answer every question before submitting.";
    setStatus("Answer every question before submitting.");
    return;
  }

  const course = activeCourse();
  const progress = learningState();
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

  progress.examAttempts[course.id] = [...getAttempts(course.id, progress), record];
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
  if (!window.confirm("Reset progress and exam attempts for the current learner?")) return;

  state.learnerProgress[learningKey()] = defaultLearningState();
  currentExam = null;
  saveState();
  renderAll();
  setStatus("Demo data reset.");
}

function usersByRole(role, status = null) {
  return state.users.filter((user) => user.role === role && (!status || user.status === status));
}

function allStudentAttempts() {
  return usersByRole("student")
    .flatMap((user) => {
      const progress = learnerProgressFor(user.id);
      return Object.values(progress.examAttempts)
        .flat()
        .map((attempt) => ({ ...attempt, userId: user.id }));
    })
    .sort((left, right) => new Date(left.date) - new Date(right.date));
}

function renderUserRows(users, emptyMessage, actionLabel = null) {
  if (!users.length) {
    return `<div class="empty-state compact">${emptyMessage}</div>`;
  }

  return users
    .map(
      (user) => `
        <div class="user-row">
          <div>
            <strong>${escapeHtml(user.name)}</strong>
            <span>${escapeHtml(user.email)}</span>
          </div>
          <div class="user-actions">
            ${roleStatusPills(user)}
            ${
              actionLabel
                ? `<button class="button primary compact" type="button" data-approve-user="${user.id}">${actionLabel}</button>`
                : ""
            }
          </div>
        </div>
      `
    )
    .join("");
}

function renderLearnerRows(users) {
  if (!users.length) {
    return `<div class="empty-state compact">No approved students yet.</div>`;
  }

  return users
    .map((user) => {
      const progress = learnerProgressFor(user.id);
      const completed = courses.reduce((total, course) => total + completedCount(course, progress), 0);
      const lessonTotal = courses.reduce((total, course) => total + course.lessons.length, 0);
      const latest = allAttempts(progress).at(-1);

      return `
        <div class="user-row">
          <div>
            <strong>${escapeHtml(user.name)}</strong>
            <span>${completed}/${lessonTotal} lessons · ${latest ? `${latest.score}% latest` : "No exams"}</span>
          </div>
          <span class="pill success">Approved</span>
        </div>
      `;
    })
    .join("");
}

function handleLogin(event) {
  event.preventDefault();
  const form = event.target;
  const email = String(form.elements.email.value || "").trim().toLowerCase();
  const password = String(form.elements.password.value || "");
  const user = state.users.find((candidate) => candidate.email === email);

  if (!user || user.password !== password) {
    showFormMessage(form, "Email or password is incorrect.");
    return;
  }

  state.currentUserId = user.id;
  currentExam = null;
  if (user.role === "student") learnerProgressFor(user.id);
  saveState();
  renderAll();
  setStatus(`${roleLabel(user.role)} signed in.`);
}

function handleSignup(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const role = String(formData.get("role") || "student");
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");

  if (!name || !email || !password) {
    showFormMessage(form, "Complete all fields.");
    return;
  }

  if (!["student", "instructor"].includes(role)) {
    showFormMessage(form, "Choose a valid role.");
    return;
  }

  if (password.length < 8) {
    showFormMessage(form, "Password must be at least 8 characters.");
    return;
  }

  if (state.users.some((user) => user.email === email)) {
    showFormMessage(form, "An account with this email already exists.");
    return;
  }

  const user = {
    id: createId(role),
    name,
    email,
    password,
    role,
    status: "pending",
    createdAt: new Date().toISOString(),
    approvedAt: null,
    approvedBy: null
  };

  state.users.push(user);
  state.currentUserId = user.id;
  if (role === "student") learnerProgressFor(user.id);
  currentExam = null;
  saveState();
  renderAll();
  setStatus(`${roleLabel(role)} account created. Approval pending.`);
}

function showFormMessage(form, message) {
  const messageNode = form.querySelector(".form-message");
  if (messageNode) {
    messageNode.textContent = message;
  }
}

function signOut() {
  state.currentUserId = null;
  currentExam = null;
  saveState();
  renderAll();
  setStatus("Signed out.");
}

function approveUser(userId) {
  const actor = currentUser();
  const target = userById(userId);
  if (!actor || !target || target.status === "approved") return;

  const canApproveInstructor = actor.role === "admin" && target.role === "instructor";
  const canApproveStudent =
    actor.role === "instructor" && actor.status === "approved" && target.role === "student";

  if (!canApproveInstructor && !canApproveStudent) {
    setStatus("This account cannot approve that request.");
    return;
  }

  target.status = "approved";
  target.approvedAt = new Date().toISOString();
  target.approvedBy = actor.id;
  if (target.role === "student") learnerProgressFor(target.id);
  saveState();
  renderAll();
  setStatus(`${roleLabel(target.role)} approved.`);
}

function handleGlobalClick(event) {
  const signOutButton = event.target.closest("[data-sign-out]");
  if (signOutButton) {
    signOut();
    return;
  }

  const approveButton = event.target.closest("[data-approve-user]");
  if (approveButton) {
    approveUser(approveButton.dataset.approveUser);
    return;
  }

  const authButton = event.target.closest("[data-auth-focus]");
  if (authButton) {
    focusAuthForm(authButton.dataset.authFocus);
    return;
  }

  const scrollButton = event.target.closest("[data-scroll-target]");
  if (scrollButton) {
    scrollToSection(scrollButton.dataset.scrollTarget);
  }
}

function focusAuthForm(target) {
  scrollToSection("#account");
  window.setTimeout(() => {
    const field = target === "signup" ? document.querySelector("#signup-name") : document.querySelector("#login-email");
    field?.focus();
  }, 220);
}

function bindStaticEvents() {
  document.querySelector("#start-learning").addEventListener("click", () => {
    scrollToSection("#courses");
  });

  document.querySelector("#jump-exam").addEventListener("click", () => {
    scrollToSection("#exams");
  });

  document.querySelector("#reset-progress").addEventListener("click", resetDemoData);

  document.body.addEventListener("click", handleGlobalClick);

  document.body.addEventListener("submit", (event) => {
    if (event.target.matches("#login-form")) {
      handleLogin(event);
    }

    if (event.target.matches("#signup-form")) {
      handleSignup(event);
    }
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
  renderAccountMenu();
  renderAuthShell();
  renderCourseCards();
  renderLessonWorkspace();
  renderDashboard();
  renderExam();
}

bindStaticEvents();
renderAll();
