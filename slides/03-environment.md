---
layout: subtitle
subtitle: section
---

# Environment

Windows vs. Linux vs. macOS

---
layout: default
---

# Your (Forensic) Environment

Your analysis machine should be **isolated**

- **No AV** — extracted files vs. AV/EDR
- Watch out for malware execution
- Created for **Windows** → SIFT / macOS / WIN-FOR
- Created for **macOS** → WIN-FOR / macOS / Linux
- Collaboration
- Malware analysis / IR / CTI

---
layout: default
---

# Our Setup

| Tool | Purpose |
|------|---------|
| **KAPE** | Artifact collection from Windows |
| **DumpIt** | Memory dump |
| **Splunk / Timeline Explorer** | Analyze collected artifacts |
| **Volatility** | Memory analysis |
| **Kali / Remnux / SIFT** | Analysis environment |
