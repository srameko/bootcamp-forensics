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
layout: default
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

<div class="flex justify-center">
  <img src="/kape-gui.png" alt="KAPE GUI" class="h-80 rounded-lg shadow" />
</div>

---
layout: default
---

# KAPE — Configuration

Run as **Admin**, sync with GitHub

**Target**
- `!SANS_Triage`
- `!BasicCollection`
- Container: **None**

**Module**
- `!EZParser`
- Export format: **JSON**

<div class="flex justify-center">
  <img src="/kape.png" alt="KAPE" class="h-72 rounded-lg shadow" />
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

# Splunk / Timeline Explorer

<div class="flex justify-center">
  <img src="/splunk-timesketch-timeline.jpg" alt="Splunk and Timeline Explorer" class="h-80 rounded-lg shadow" />
</div>
