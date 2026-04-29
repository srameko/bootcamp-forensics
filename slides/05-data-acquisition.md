---
layout: section
---

# Data Acquisition

Memory, disc, …

---
layout: default
---

# Disc Image

<div class="flex justify-center">
  <img src="/disc-image.jpg" alt="Disc Image" class="h-80 rounded-lg shadow" />
</div>

---
layout: default
---

# Mobile Device Acquisition

<div class="flex justify-center">
  <img src="/mobile-device-acquisition.jpg" alt="Mobile Device Acquisition" class="h-80 rounded-lg shadow" />
</div>

---
layout: default
---

# Full Scale vs. Artifact Extraction

Sometimes full scale is **not needed** (no lawsuit)

- Grab the necessary files
- Limited impact (blocked by AV/EDR)
  - Browser History, Downloaded Files, …
  - Grab via KAPE, CyLR, Velociraptor or other agent
- **Always note path and hash**
- Context!

---
layout: section
---

# Artifact Collection

---
layout: image-right
image: /gKAPE.png
---

# KAPE

**Artifact parser and Extractor** — [official site](https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape)

**Targets** — what will be grabbed
- Virtual disc
- Mounted system
- Live

**Modules** — how to process data

---
layout: default
---

# KAPE GUI

<div class="flex justify-center h-full">
  <img src="/KAPETargetsandModulesExample.gif" alt="KAPE Targets and Modules" class="max-h-full max-w-full rounded-lg shadow object-contain" />
</div>

---
layout: default
---

# KAPE — Configuration

<div class="flex gap-8 items-start">
  <div>

<p>Run as <strong>Admin</strong>, sync with GitHub</p>

<p><strong>Target</strong></p>
<ul>
  <li><code>!SANS_Triage</code></li>
  <li><code>!BasicCollection</code></li>
  <li>Container: <strong>None</strong></li>
</ul>

<p><strong>Module</strong></p>
<ul>
  <li><code>!EZParser</code></li>
  <li>Export format: <strong>JSON</strong></li>
</ul>

  </div>
  <img src="/KapeTriage-EZParser-Demonstration.gif" alt="KAPE Demo" class="h-80 rounded-lg shadow shrink-0 ml-auto" />
</div>

---
layout: default
---

# From KAPE to Splunk / Timeline Explorer

1. Take the output (JSON), zip and transfer to your Splunk (Kali)
2. Import → Create a separate index
3. **Splunk time!**

If you have CSV (as KAPE output), open it in **Timeline Explorer**

---
layout: default
---

# Splunk / Timeline Explorer - Demo time

<div class="flex justify-center">
  <img src="/timeline-demo.png" alt="Splunk and Timeline Explorer" class="h-80 rounded-lg shadow" />
</div>
