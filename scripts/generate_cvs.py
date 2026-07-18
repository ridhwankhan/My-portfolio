"""Generate tailored professional CVs for Ridhwanur Rahman Khan."""

from __future__ import annotations

from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parent.parent
CVS_DIR = ROOT / "CVs"
PUBLIC = ROOT / "public"

CONTACT = (
    "Dhaka, Bangladesh  |  ridhwankhan03@gmail.com  |  +880 1718-175151\n"
    "linkedin.com/in/ridhwan1  |  github.com/ridhwankhan  |  ridhwank-portfolio.vercel.app"
)

EDUCATION = [
    (
        "BRAC University - B.Sc. in Computer Science",
        "Dhaka, Bangladesh  |  Expected Oct 2026  |  CGPA 3.47",
        "Relevant coursework: Data Structures & Algorithms, Databases, Software Engineering, "
        "Operating Systems, Computer Networks, Machine Learning.",
    ),
    (
        "Uttara High School and College - HSC (2021) & SSC (2019), Science",
        "Dhaka, Bangladesh  |  GPA 5.00 / 5.00",
        "",
    ),
]

EXPERIENCE_CORE = [
    {
        "role": "Founder & Sole Operator",
        "org": "Shoukhin Lifestyle E-Commerce - soukhin.vercel.app",
        "dates": "2026 - Present",
        "bullets": [
            "Built and deployed a production full-stack storefront (React, TypeScript, Supabase) with checkout and role-based admin.",
            "Implemented secure bKash payment flows with server-side price validation; hardened auth with RLS, rate limiting, and secure RPCs.",
            "Owned end-to-end product delivery: architecture, UI, backend, deployment on Vercel, and ongoing operations.",
        ],
    },
    {
        "role": "Operations Associate",
        "org": "Shilar Sokher Rannaghor (E-Commerce)",
        "dates": "2022 - Present",
        "bullets": [
            "Supported order fulfillment, customer communication, and product sourcing for an online retail business.",
            "Built reliability habits around deadlines, stakeholder communication, and day-to-day operational ownership.",
        ],
    },
]

PROJECTS = {
    "shoukhin": (
        "Shoukhin E-Commerce Platform [LIVE]",
        "React, TypeScript, Supabase  |  soukhin.vercel.app",
        [
            "Shipped a bilingual English/Bengali production storefront with checkout, role-based admin, and bKash payments.",
            "Deployed on Vercel with Supabase (PostgreSQL, Auth, Storage, Edge Functions), multi-tier staff access, and RLS.",
        ],
    ),
    "kairo": (
        "KAIRO - Job Monitoring SaaS [LIVE]",
        "Next.js, Supabase, Python  |  kairo-job.vercel.app",
        [
            "Launched a live SaaS for career-page monitoring and job alerts; owned requirements, architecture, build, and deployment.",
            "Implemented admin governance for user management, account moderation, password resets, and messaging.",
        ],
    ),
    "fiducia": (
        "Fiducia Bank - Zero-Trust Banking [LIVE]",
        "Django, React, Cryptography  |  fiducia-bank.vercel.app",
        [
            "Built a zero-trust banking platform with JWT sessions, optional 2FA, encrypted data at rest, and HMAC integrity checks.",
            "Added Admin/Authority workspaces for KYC and security monitoring; showcased at NSU Cybersecurity Inauguration.",
        ],
    ),
    "drone": (
        "Quadcopter Flight Controller",
        "C++, Arduino, Embedded Systems  |  github.com/ridhwankhan/Arduino-flight-controller",
        [
            "Engineered a custom flight controller with MPU-6050 IMU sensing, ESC control, PID stabilization, and a 250Hz control loop.",
        ],
    ),
    "thesis": (
        "Multimodal ML for Agricultural Land Management (Thesis)",
        "Python, Ensemble ML (Random Forest, XGBoost)  |  Defended with 98%",
        [
            "Fused NDVI, Sentinel-1 radar, climate, and soil data across seven Bangladeshi districts to predict Aman rice and Wheat yields.",
            "Ensemble models outperformed linear baselines (cross-validated R^2 above ~0.85) with imputation for missing fields.",
        ],
    ),
}

CERTS = (
    "Google: Data Foundations  |  IBM: Machine Learning with Python; Deep Learning with Keras; "
    "Software Engineering; Linux Shell Scripting; Data Visualization; Excel for Data Analysis"
)

SKILLS = {
    "generic": (
        "Languages: Python, C++, TypeScript, JavaScript, SQL, PHP, Bash\n"
        "Frameworks: React, Next.js, Django, TensorFlow, Keras\n"
        "Backend & Data: PostgreSQL, MySQL, Supabase, REST APIs, Authentication, Row-Level Security (RLS)\n"
        "Systems & Tools: Git, Linux, Arduino, Embedded Systems, Vercel, Data Structures & Algorithms"
    ),
    "Software_Engineering": (
        "Languages: Python, C++, TypeScript, JavaScript, SQL, Bash\n"
        "Engineering: React, Next.js, Django, REST APIs, Authentication, Testing & Deployment\n"
        "Data & Systems: PostgreSQL, MySQL, Supabase, Git, Linux, Vercel, DSA"
    ),
    "Full_Stack_Development": (
        "Frontend: React, TypeScript, JavaScript, Next.js\n"
        "Backend: Python, Django, REST APIs, Authentication, Row-Level Security (RLS)\n"
        "Data & Deploy: PostgreSQL, MySQL, Supabase, Vercel, Git, Linux"
    ),
    "Cybersecurity_Secure_Systems": (
        "Security: Zero-trust design, JWT sessions, 2FA, RSA/ECC cryptography, HMAC integrity, RLS\n"
        "Stack: Django, React, Python, PostgreSQL, Authentication & Authorization\n"
        "Tools: Git, Linux, Secure RPC patterns, Audit-oriented verification"
    ),
    "Data_ML": (
        "Languages: Python, SQL, TypeScript\n"
        "ML & Data: TensorFlow, Keras, Random Forest, XGBoost, EDA, Feature Engineering\n"
        "Tools: PostgreSQL, MySQL, Git, Linux; Remote-sensing & multimodal data pipelines"
    ),
    "Backend_APIs": (
        "Backend: Python, Django, REST APIs, Authentication, RLS, Secure RPCs\n"
        "Data: PostgreSQL, MySQL, Supabase, SQL\n"
        "Platform: Git, Linux, Vercel, Next.js integrations, Rate limiting"
    ),
}

SUMMARIES = {
    "generic": {
        "job": (
            "Computer Science undergraduate at BRAC University (expected Oct 2026) with hands-on experience "
            "shipping production full-stack web applications, secure systems, and data-driven projects. "
            "Comfortable owning product features end-to-end - from architecture and implementation to deployment."
        ),
        "intern": (
            "Computer Science undergraduate at BRAC University (expected Oct 2026) seeking a software engineering "
            "internship. Experienced building live web products with React, TypeScript, Next.js, Python, and PostgreSQL; "
            "eager to contribute in a collaborative engineering team and grow through real production work."
        ),
    },
    "Software_Engineering": {
        "job": (
            "Software engineering-focused CS undergraduate who ships maintainable, production-ready applications. "
            "Strong foundation in DSA, system design for web products, and ownership of full delivery cycles."
        ),
        "intern": (
            "CS undergraduate seeking a Software Engineering internship. Built and deployed live products; strong in "
            "Python, TypeScript, React/Next.js, and backend fundamentals. Ready to learn team practices and ship reliably."
        ),
    },
    "Full_Stack_Development": {
        "job": (
            "Full-stack developer focused on React/TypeScript frontends and Python/Supabase backends. "
            "Shipped bilingual e-commerce and SaaS products with auth, payments, and admin tooling in production."
        ),
        "intern": (
            "Seeking a Full-Stack Development internship. Experience with React, TypeScript, Next.js, and PostgreSQL/Supabase "
            "across live customer-facing and SaaS applications."
        ),
    },
    "Cybersecurity_Secure_Systems": {
        "job": (
            "Security-minded engineer experienced building zero-trust banking flows with JWT/2FA, cryptography, "
            "encrypted storage, and integrity verification. Interested in secure systems and application security roles."
        ),
        "intern": (
            "Seeking a Cybersecurity / Secure Systems internship. Built Fiducia Bank with zero-trust sessions, encrypted "
            "data at rest, HMAC checks, and role-aware admin workspaces; showcased at NSU Cybersecurity Inauguration."
        ),
    },
    "Data_ML": {
        "job": (
            "Data/ML-oriented CS undergraduate with a multimodal thesis (98% defense) on agricultural yield prediction "
            "and applied experience with Python ML tooling, SQL, and production data-backed web systems."
        ),
        "intern": (
            "Seeking a Data Science / ML internship. Defended a multimodal ML thesis (98%) combining satellite, climate, "
            "and soil features; also builds data-backed full-stack applications with Python and SQL."
        ),
    },
    "Backend_APIs": {
        "job": (
            "Backend-focused engineer experienced designing APIs, auth, secure checkout RPCs, and PostgreSQL/Supabase "
            "data layers for live products. Strong emphasis on correctness, security, and reliable deployment."
        ),
        "intern": (
            "Seeking a Backend / API internship. Experience implementing REST APIs, authentication, RLS, and server-side "
            "validation for production e-commerce and SaaS systems."
        ),
    },
}

CATEGORY_PROJECTS = {
    "generic": ["shoukhin", "kairo", "fiducia", "drone"],
    "Software_Engineering": ["shoukhin", "kairo", "fiducia", "drone"],
    "Full_Stack_Development": ["shoukhin", "kairo", "fiducia"],
    "Cybersecurity_Secure_Systems": ["fiducia", "shoukhin", "kairo"],
    "Data_ML": ["thesis", "kairo", "shoukhin"],
    "Backend_APIs": ["shoukhin", "kairo", "fiducia"],
}


class CVPDF(FPDF):
    def header(self) -> None:
        pass

    def footer(self) -> None:
        self.set_y(-12)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(120, 120, 120)
        self.cell(0, 8, "Ridhwanur Rahman Khan", align="C")

    def section(self, title: str) -> None:
        self.ln(2)
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(20, 20, 20)
        self.cell(0, 6, title.upper(), new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(40, 40, 40)
        self.set_line_width(0.4)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(3)

    def body(self, text: str, bold: bool = False, size: float = 9.5) -> None:
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "B" if bold else "", size)
        self.set_text_color(30, 30, 30)
        self.multi_cell(0, 4.4, text, new_x="LMARGIN", new_y="NEXT")

    def muted(self, text: str) -> None:
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "", 8.5)
        self.set_text_color(90, 90, 90)
        self.multi_cell(0, 4.0, text, new_x="LMARGIN", new_y="NEXT")


def build_cv(category: str, kind: str, out_path: Path) -> None:
    """kind: 'job' -> CV_... ; 'intern' -> CVi_..."""
    pdf = CVPDF(format="A4")
    pdf.set_auto_page_break(auto=True, margin=14)
    pdf.add_page()
    pdf.set_margins(14, 12, 14)

    # Name
    pdf.set_font("Helvetica", "B", 18)
    pdf.set_text_color(15, 15, 15)
    pdf.cell(0, 8, "Ridhwanur Rahman Khan", new_x="LMARGIN", new_y="NEXT", align="C")

    # Target line
    target = {
        "generic": "Software Engineer" if kind == "job" else "Software Engineering Intern",
        "Software_Engineering": "Software Engineer" if kind == "job" else "Software Engineering Intern",
        "Full_Stack_Development": "Full-Stack Developer" if kind == "job" else "Full-Stack Development Intern",
        "Cybersecurity_Secure_Systems": "Secure Systems / Application Security" if kind == "job" else "Cybersecurity Intern",
        "Data_ML": "Data / Machine Learning Engineer" if kind == "job" else "Data Science / ML Intern",
        "Backend_APIs": "Backend Engineer" if kind == "job" else "Backend / API Intern",
    }[category]
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(50, 50, 50)
    pdf.cell(0, 5, target, new_x="LMARGIN", new_y="NEXT", align="C")

    pdf.set_font("Helvetica", "", 8.5)
    pdf.set_text_color(70, 70, 70)
    for line in CONTACT.split("\n"):
        pdf.cell(0, 4, line, new_x="LMARGIN", new_y="NEXT", align="C")
    pdf.ln(2)

    # Summary
    pdf.section("Summary")
    pdf.body(SUMMARIES[category][kind])

    # Skills
    pdf.section("Skills")
    pdf.body(SKILLS.get(category, SKILLS["generic"]))

    # Experience
    pdf.section("Experience")
    for exp in EXPERIENCE_CORE:
        pdf.set_font("Helvetica", "B", 9.5)
        pdf.set_text_color(20, 20, 20)
        pdf.body(f"{exp['role']}  -  {exp['org']}", bold=True, size=9.5)
        pdf.muted(exp["dates"])
        for b in exp["bullets"]:
            pdf.body(f"-  {b}")
        pdf.ln(1)

    # Projects
    pdf.section("Projects")
    for key in CATEGORY_PROJECTS[category]:
        title, meta, bullets = PROJECTS[key]
        pdf.body(title, bold=True, size=9.5)
        pdf.muted(meta)
        for b in bullets:
            pdf.body(f"-  {b}")
        pdf.ln(1)

    # Education
    pdf.section("Education")
    for title, meta, extra in EDUCATION:
        pdf.body(title, bold=True, size=9.5)
        pdf.muted(meta)
        if extra:
            pdf.body(extra)
        pdf.ln(1)

    # Certifications
    pdf.section("Certifications")
    pdf.body(CERTS)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(out_path))
    print(f"Wrote {out_path.relative_to(ROOT)}")


def main() -> None:
    categories = [
        "generic",
        "Software_Engineering",
        "Full_Stack_Development",
        "Cybersecurity_Secure_Systems",
        "Data_ML",
        "Backend_APIs",
    ]

    for cat in categories:
        folder = CVS_DIR / ("Generic" if cat == "generic" else cat)
        build_cv(cat, "job", folder / "CV_Ridhwanur_Rahman_Khan.pdf")
        build_cv(cat, "intern", folder / "CVi_Ridhwanur_Rahman_Khan.pdf")

    # Public downloads (generic job + internship)
    generic_job = CVS_DIR / "Generic" / "CV_Ridhwanur_Rahman_Khan.pdf"
    generic_intern = CVS_DIR / "Generic" / "CVi_Ridhwanur_Rahman_Khan.pdf"
    PUBLIC.mkdir(exist_ok=True)
    (PUBLIC / "CV_Ridhwanur_Rahman_Khan.pdf").write_bytes(generic_job.read_bytes())
    (PUBLIC / "CVi_Ridhwanur_Rahman_Khan.pdf").write_bytes(generic_intern.read_bytes())
    print("Copied generic CVs to public/ for downloads")


if __name__ == "__main__":
    main()
