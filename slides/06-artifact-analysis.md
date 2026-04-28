---
layout: section
---

# Artifact Analysis

From Data to CTI

---
layout: default
---

# Gathering the Evidence

**Document everything**

- Screenshot
- Copy line of the event
- IoCs (files, IPs, domains, URLs, …)
- OSINT / CTI
- **Hash!** — MD5 + SHA1 + SHA256
  - `md5sum | sha1sum | sha256sum`
- From event to MITRE
  - Categorize each (attacker's) step to MITRE TTP

---
layout: default
---

# Defanging

Defanging is a security practice that modifies potentially malicious indicators to make them **non-functional while still readable**.

| Original | Defanged |
|----------|----------|
| `https://example.com` | `hxxps[://]example[.]com` |
| `https://example.com/login.php` | `hxxps[://]example[.]com/login[.]php` |
| `8.8.8.8` | `8[.]8[.]8[.]8` |
| `1.1.1.1:53` | `1[.]1[.]1[.]1[:]53` |
| `name.surname@example.com` | `name[.]surname@example[.]com` |

---
layout: default
---

# Diamond Model

<div class="flex gap-8 items-start">
  <div>

Overlaps between attacks — two identical parts

  </div>
  <img src="/diamond.jpeg" alt="Diamond Model" class="h-72 rounded-lg shadow shrink-0" />
</div>

---
layout: default
---

# ACH — Analysis of Competing Hypotheses

Prepare information for CTI / attribution

1. Write down hypotheses
2. Confirm (support) / deny (refute) with gathered evidence
