import { useState } from "react";

/* ─────────────────────────────────────────────
   DIRECTION 1: QUIET INTELLIGENCE
   Single-column focus. No sidebar. AI whispers
   inline as margin annotations. Borderless cards
   separated by whitespace alone.
   ───────────────────────────────────────────── */
function QuietIntelligence({ isActive }) {
  return (
    <div style={{
      background: "#FAFAF9",
      height: "100%",
      fontFamily: "'Instrument Serif', Georgia, serif",
      color: "#1C1917",
      display: "flex",
      flexDirection: "column",
      borderRadius: 14,
      overflow: "hidden",
      border: "1px solid #E7E5E4",
      transition: "box-shadow 0.4s ease",
      boxShadow: isActive ? "0 24px 64px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.03)",
    }}>
      {/* Minimal top bar — just breadcrumbs */}
      <div style={{
        padding: "14px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #F0EFED",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11.5,
          color: "#A8A29E",
          letterSpacing: "-0.01em",
        }}>
          <span>Projects</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ color: "#78716C" }}>Q1 Strategy</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ color: "#1C1917" }}>Tasks</span>
        </div>
        <div style={{
          padding: "4px 10px",
          borderRadius: 99,
          background: "rgba(99,102,241,0.06)",
          border: "1px solid rgba(99,102,241,0.1)",
          fontSize: 10,
          fontFamily: "'JetBrains Mono', monospace",
          color: "#6366F1",
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: "50%",
            background: "#6366F1",
            animation: isActive ? "qiPulse 2.5s infinite" : "none",
          }} />
          AI active
        </div>
      </div>

      {/* Single column content — the defining layout choice */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        padding: "28px 32px",
        maxWidth: 520,
        margin: "0 auto",
        width: "100%",
      }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#A8A29E",
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: 6,
          }}>Today · Tuesday</div>
          <h1 style={{
            fontSize: 26,
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            margin: 0,
          }}>Morning Focus</h1>
        </div>

        {/* Tasks as clean text rows — no card borders */}
        {[
          { text: "Review Q1 strategy doc", ai: "AI: ~40 min read, 3 key decisions needed", done: false },
          { text: "Reply to Mika's design feedback", ai: null, done: true },
          { text: "Update project timeline", ai: "AI: 2 dependencies shifted — see suggestion", done: false },
          { text: "Prepare standup notes", ai: "AI: auto-drafted from yesterday's activity", done: false },
        ].map((task, i) => (
          <div key={i} style={{
            padding: "14px 0",
            borderBottom: "1px solid #F0EFED",
            opacity: task.done ? 0.45 : 1,
          }}>
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
            }}>
              <div style={{
                width: 18, height: 18, borderRadius: "50%",
                border: task.done ? "none" : "1.5px solid #D6D3D1",
                background: task.done ? "#D6D3D1" : "transparent",
                flexShrink: 0,
                marginTop: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {task.done && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13.5,
                  letterSpacing: "-0.01em",
                  textDecoration: task.done ? "line-through" : "none",
                  color: task.done ? "#A8A29E" : "#1C1917",
                  lineHeight: 1.4,
                }}>
                  {task.text}
                </div>
                {/* AI annotation — the signature element */}
                {task.ai && (
                  <div style={{
                    marginTop: 6,
                    fontSize: 11,
                    color: "#6366F1",
                    fontFamily: "'JetBrains Mono', monospace",
                    lineHeight: 1.5,
                    paddingLeft: 10,
                    borderLeft: "2px solid rgba(99,102,241,0.2)",
                  }}>
                    {task.ai}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* AI insight — floats as a quiet block */}
        <div style={{
          marginTop: 28,
          padding: "18px 20px",
          background: "rgba(99,102,241,0.04)",
          borderRadius: 10,
          borderLeft: "3px solid rgba(99,102,241,0.3)",
        }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12.5,
            color: "#44403C",
            lineHeight: 1.55,
          }}>
            <span style={{ color: "#6366F1", fontWeight: 500 }}>Suggestion</span> — Block 2–3pm for the strategy review. Your calendar is open and the doc requires focused reading.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DIRECTION 2: STRUCTURED SIGNAL
   Dense 3-column layout. Table rows. AI surfaces
   as confidence scores, classification tags,
   and structured metadata chips.
   ───────────────────────────────────────────── */
function StructuredSignal({ isActive }) {
  return (
    <div style={{
      background: "#F8F8F6",
      height: "100%",
      fontFamily: "'Karla', sans-serif",
      color: "#1A1A18",
      display: "flex",
      flexDirection: "column",
      borderRadius: 6,
      overflow: "hidden",
      border: "1px solid #DDDCD7",
      transition: "box-shadow 0.4s ease",
      boxShadow: isActive ? "0 24px 64px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.03)",
    }}>
      {/* Dense top bar with tab segments */}
      <div style={{
        padding: "0 16px",
        borderBottom: "1px solid #DDDCD7",
        background: "#FFFFFF",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        height: 40,
      }}>
        <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
          {["Inbox", "Assigned", "AI Triage", "Archive"].map((tab, i) => (
            <div key={tab} style={{
              padding: "0 14px",
              fontSize: 11.5,
              fontWeight: i === 2 ? 600 : 400,
              color: i === 2 ? "#0D9488" : "#6B6B66",
              display: "flex",
              alignItems: "center",
              borderBottom: i === 2 ? "2px solid #0D9488" : "2px solid transparent",
              letterSpacing: "-0.01em",
              cursor: "pointer",
              gap: 5,
            }}>
              {tab}
              {i === 2 && <span style={{
                background: "#0D9488",
                color: "#fff",
                fontSize: 9,
                fontWeight: 700,
                padding: "1px 5px",
                borderRadius: 3,
                fontFamily: "'IBM Plex Mono', monospace",
              }}>7</span>}
            </div>
          ))}
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}>
          <div style={{
            padding: "4px 8px",
            borderRadius: 3,
            background: "#F1F0ED",
            border: "1px solid #DDDCD7",
            fontSize: 10,
            fontFamily: "'IBM Plex Mono', monospace",
            color: "#9C9C96",
          }}>⌘K</div>
        </div>
      </div>

      {/* 3-column layout */}
      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
        {/* Left: Compact filter sidebar */}
        <div style={{
          width: 130,
          borderRight: "1px solid #DDDCD7",
          background: "#FFFFFF",
          padding: "10px 8px",
          fontSize: 11,
        }}>
          <div style={{
            fontSize: 9,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#9C9C96",
            padding: "4px 8px",
            marginBottom: 4,
            fontFamily: "'IBM Plex Mono', monospace",
          }}>Filters</div>
          {[
            { label: "All", count: 24, active: false },
            { label: "High Priority", count: 7, active: true },
            { label: "Needs Review", count: 5, active: false },
            { label: "Blocked", count: 2, active: false },
          ].map((f, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 8px",
              borderRadius: 3,
              background: f.active ? "rgba(13,148,136,0.06)" : "transparent",
              color: f.active ? "#0D9488" : "#6B6B66",
              fontWeight: f.active ? 500 : 400,
              cursor: "pointer",
              letterSpacing: "-0.01em",
            }}>
              <span style={{ fontSize: 11 }}>{f.label}</span>
              <span style={{
                fontSize: 9.5,
                fontFamily: "'IBM Plex Mono', monospace",
                color: f.active ? "#0D9488" : "#9C9C96",
              }}>{f.count}</span>
            </div>
          ))}

          <div style={{
            marginTop: 12,
            padding: "8px",
            borderRadius: 3,
            background: "#F8F8F6",
            border: "1px solid #DDDCD7",
          }}>
            <div style={{
              fontSize: 9,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#9C9C96",
              fontFamily: "'IBM Plex Mono', monospace",
              marginBottom: 4,
            }}>AI Confidence</div>
            <div style={{
              height: 4,
              background: "#EBEBEA",
              borderRadius: 2,
              overflow: "hidden",
            }}>
              <div style={{
                height: "100%",
                width: "78%",
                background: "#0D9488",
                borderRadius: 2,
              }} />
            </div>
            <div style={{
              fontSize: 9.5,
              color: "#6B6B66",
              marginTop: 3,
              fontFamily: "'IBM Plex Mono', monospace",
            }}>78% avg accuracy</div>
          </div>
        </div>

        {/* Center: Table-style task list */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 80px 70px 64px",
            padding: "8px 14px",
            borderBottom: "1px solid #DDDCD7",
            background: "#F8F8F6",
            fontSize: 9.5,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "#9C9C96",
            fontFamily: "'IBM Plex Mono', monospace",
          }}>
            <span>Task</span>
            <span>Category</span>
            <span>Priority</span>
            <span style={{ textAlign: "right" }}>Score</span>
          </div>

          {[
            { task: "Review Q1 strategy doc", cat: "Review", pri: "High", score: 94, aiTag: "auto-classified" },
            { task: "Respond to design feedback", cat: "Comms", pri: "Med", score: 87, aiTag: null },
            { task: "Update project timeline", cat: "Planning", pri: "High", score: 91, aiTag: "dependency shift" },
            { task: "Prepare standup notes", cat: "Routine", pri: "Low", score: 72, aiTag: "auto-drafted" },
            { task: "Schedule stakeholder sync", cat: "Comms", pri: "Med", score: 65, aiTag: null },
          ].map((row, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr 80px 70px 64px",
              padding: "9px 14px",
              borderBottom: "1px solid #F1F0ED",
              background: i === 0 ? "rgba(13,148,136,0.03)" : "#FFFFFF",
              alignItems: "center",
              cursor: "pointer",
              fontSize: 12,
            }}>
              <div>
                <div style={{ letterSpacing: "-0.01em", fontWeight: 400, lineHeight: 1.3 }}>
                  {row.task}
                </div>
                {row.aiTag && (
                  <span style={{
                    display: "inline-block",
                    marginTop: 3,
                    fontSize: 9,
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: "#0D9488",
                    background: "rgba(13,148,136,0.08)",
                    padding: "1px 5px",
                    borderRadius: 2,
                  }}>⚡ {row.aiTag}</span>
                )}
              </div>
              <span style={{
                fontSize: 10,
                color: "#6B6B66",
                fontFamily: "'IBM Plex Mono', monospace",
              }}>{row.cat}</span>
              <span style={{
                fontSize: 10,
                fontWeight: 600,
                color: row.pri === "High" ? "#DC2626" : row.pri === "Med" ? "#D97706" : "#9C9C96",
              }}>{row.pri}</span>
              <div style={{ textAlign: "right" }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: row.score >= 90 ? "#0D9488" : row.score >= 75 ? "#6B6B66" : "#9C9C96",
                }}>{row.score}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Context panel */}
        <div style={{
          width: 160,
          borderLeft: "1px solid #DDDCD7",
          background: "#FFFFFF",
          padding: "12px 10px",
          fontSize: 11,
        }}>
          <div style={{
            fontSize: 9,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "#9C9C96",
            fontFamily: "'IBM Plex Mono', monospace",
            marginBottom: 8,
          }}>AI Context</div>
          <div style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            marginBottom: 10,
            lineHeight: 1.3,
          }}>Review Q1 strategy doc</div>
          {[
            ["Estimated", "40 min"],
            ["Decisions", "3 pending"],
            ["Stakeholders", "4 tagged"],
            ["Last opened", "2 days ago"],
          ].map(([k, v], i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "4px 0",
              borderBottom: "1px solid #F1F0ED",
            }}>
              <span style={{ color: "#9C9C96", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace" }}>{k}</span>
              <span style={{ fontSize: 10.5, fontWeight: 500 }}>{v}</span>
            </div>
          ))}
          <div style={{
            marginTop: 10,
            padding: "8px",
            borderRadius: 3,
            background: "rgba(13,148,136,0.05)",
            border: "1px solid rgba(13,148,136,0.1)",
            fontSize: 10.5,
            color: "#1A1A18",
            lineHeight: 1.45,
          }}>
            <div style={{ fontWeight: 600, fontSize: 9.5, color: "#0D9488", marginBottom: 3, fontFamily: "'IBM Plex Mono', monospace" }}>RECOMMENDATION</div>
            Block 2–3pm. Calendar is open and this requires deep focus.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DIRECTION 3: SOFT ENGINE
   Split layout: task list + AI copilot chat panel.
   Rounded everything. AI has its own conversational
   space that's always present.
   ───────────────────────────────────────────── */
function SoftEngine({ isActive }) {
  return (
    <div style={{
      background: "#FAF9F7",
      height: "100%",
      fontFamily: "'Nunito Sans', sans-serif",
      color: "#2C2520",
      display: "flex",
      flexDirection: "column",
      borderRadius: 16,
      overflow: "hidden",
      border: "1px solid #E8E4DD",
      transition: "box-shadow 0.4s ease",
      boxShadow: isActive ? "0 24px 64px rgba(0,0,0,0.07)" : "0 2px 8px rgba(0,0,0,0.03)",
    }}>
      {/* Top bar with pill nav */}
      <div style={{
        padding: "10px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #F0ECE6",
        background: "#FFFFFF",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 24, height: 24, borderRadius: 8,
            background: "linear-gradient(135deg, #F59E0B, #D97706)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>
            </svg>
          </div>
          {/* Pill-style nav */}
          <div style={{
            display: "flex",
            background: "#F5F3EF",
            borderRadius: 99,
            padding: 3,
            gap: 2,
          }}>
            {["Tasks", "Notes", "Calendar"].map((tab, i) => (
              <div key={tab} style={{
                padding: "4px 12px",
                borderRadius: 99,
                fontSize: 11,
                fontWeight: i === 0 ? 600 : 400,
                color: i === 0 ? "#2C2520" : "#8C8078",
                background: i === 0 ? "#FFFFFF" : "transparent",
                boxShadow: i === 0 ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
                letterSpacing: "-0.01em",
              }}>{tab}</div>
            ))}
          </div>
        </div>
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: "linear-gradient(135deg, #FDE68A, #F59E0B)",
          border: "2px solid #fff",
          boxShadow: "0 2px 6px rgba(217,119,6,0.2)",
        }} />
      </div>

      {/* Split layout: tasks + AI copilot */}
      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
        {/* Left: Card-based tasks */}
        <div style={{ flex: 1, padding: "14px 14px", overflowY: "auto" }}>
          <div style={{
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "#B0A89E",
            fontFamily: "'Fira Code', monospace",
            marginBottom: 10,
          }}>4 tasks today</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { title: "Review Q1 strategy", tags: ["Deep work", "40 min"], accent: true },
              { title: "Reply to Mika", tags: ["Quick reply"], accent: false },
              { title: "Update timeline", tags: ["Collab", "AI assist"], accent: true },
              { title: "Standup notes", tags: ["Auto-drafted ✨"], accent: true },
            ].map((task, i) => (
              <div key={i} style={{
                padding: "12px 14px",
                borderRadius: 12,
                background: "#FFFFFF",
                border: `1px solid ${task.accent ? "rgba(217,119,6,0.15)" : "#E8E4DD"}`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 7,
                }}>
                  <span style={{
                    fontSize: 12.5,
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}>{task.title}</span>
                  <div style={{
                    width: 16, height: 16, borderRadius: 5,
                    border: "1.5px solid #D6CFCA",
                  }} />
                </div>
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {task.tags.map((tag, j) => (
                    <span key={j} style={{
                      padding: "2px 8px",
                      borderRadius: 99,
                      background: tag.includes("✨") || tag.includes("AI") ? "rgba(217,119,6,0.08)" : "#F5F3EF",
                      color: tag.includes("✨") || tag.includes("AI") ? "#B45309" : "#8C8078",
                      fontSize: 10,
                      fontWeight: 400,
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: AI Copilot chat */}
        <div style={{
          width: "44%",
          borderLeft: "1px solid #E8E4DD",
          background: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
        }}>
          <div style={{
            padding: "10px 14px",
            borderBottom: "1px solid #F0ECE6",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "linear-gradient(135deg, #F59E0B, #D97706)",
              animation: isActive ? "sePulse 2s infinite" : "none",
            }} />
            <span style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}>AI Copilot</span>
          </div>

          <div style={{ flex: 1, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
            {/* AI message bubble */}
            <div style={{
              background: "#F5F3EF",
              borderRadius: "14px 14px 14px 4px",
              padding: "10px 13px",
              fontSize: 11.5,
              lineHeight: 1.5,
              color: "#44403C",
              maxWidth: "92%",
            }}>
              Good morning! I've reviewed your tasks. The strategy doc is the biggest item — I've prepared a summary with the 3 key decisions highlighted.
            </div>

            {/* Action chips */}
            <div style={{ display: "flex", gap: 5, paddingLeft: 4 }}>
              {["View summary", "Block time"].map((action, i) => (
                <div key={i} style={{
                  padding: "5px 11px",
                  borderRadius: 99,
                  border: "1px solid #E8E4DD",
                  fontSize: 10.5,
                  color: "#8C8078",
                  background: "#FFFFFF",
                  cursor: "pointer",
                }}>
                  {action}
                </div>
              ))}
            </div>

            <div style={{
              background: "#F5F3EF",
              borderRadius: "14px 14px 14px 4px",
              padding: "10px 13px",
              fontSize: 11.5,
              lineHeight: 1.5,
              color: "#44403C",
              maxWidth: "92%",
            }}>
              Also, your standup notes are auto-drafted from yesterday's activity. Want me to refine them?
            </div>

            <div style={{ flex: 1 }} />

            {/* Input area */}
            <div style={{
              padding: "9px 12px",
              borderRadius: 12,
              background: "#F5F3EF",
              border: "1px solid #E8E4DD",
              fontSize: 11.5,
              color: "#B0A89E",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <span>Ask your copilot...</span>
              <div style={{
                width: 22, height: 22, borderRadius: 7,
                background: "linear-gradient(135deg, #F59E0B, #D97706)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DIRECTION 4: DARK MATTER
   Command-palette-centric. Floating panels.
   AI as luminous overlay. Minimal chrome.
   ───────────────────────────────────────────── */
function DarkMatter({ isActive }) {
  return (
    <div style={{
      background: "#0E0E10",
      height: "100%",
      fontFamily: "'Geist', system-ui, sans-serif",
      color: "#ECECEE",
      display: "flex",
      flexDirection: "column",
      borderRadius: 12,
      overflow: "hidden",
      border: "1px solid #2A2A2E",
      transition: "box-shadow 0.4s ease",
      boxShadow: isActive ? "0 0 0 1px rgba(129,140,248,0.15), 0 24px 64px rgba(0,0,0,0.5)" : "0 2px 8px rgba(0,0,0,0.2)",
      position: "relative",
    }}>
      {/* Subtle glow */}
      <div style={{
        position: "absolute",
        top: -60,
        left: "50%",
        transform: "translateX(-50%)",
        width: 300,
        height: 200,
        background: "radial-gradient(ellipse, rgba(129,140,248,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Ultra-minimal top bar */}
      <div style={{
        padding: "10px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #1E1E22",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "#818CF8",
            boxShadow: "0 0 8px rgba(129,140,248,0.5)",
          }} />
          <span style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 13.5,
            fontWeight: 400,
            letterSpacing: "-0.01em",
            color: "#ECECEE",
          }}>Workspace</span>
        </div>
        {/* Command palette trigger */}
        <div style={{
          padding: "5px 14px",
          borderRadius: 8,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          fontSize: 11,
          color: "#5A5A62",
          fontFamily: "'Geist Mono', monospace",
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5A5A62" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          Ask AI anything...
          <span style={{
            padding: "1px 5px",
            borderRadius: 4,
            background: "rgba(255,255,255,0.06)",
            fontSize: 9,
            marginLeft: 4,
          }}>⌘K</span>
        </div>
      </div>

      {/* Main: Floating panels layout */}
      <div style={{
        flex: 1,
        padding: "16px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "auto 1fr",
        gap: 10,
        position: "relative",
        zIndex: 1,
      }}>
        {/* Stats row */}
        <div style={{
          gridColumn: "1 / -1",
          display: "flex",
          gap: 10,
        }}>
          {[
            { label: "Open Tasks", value: "12", trend: "−3" },
            { label: "AI Actions", value: "8", trend: "+5" },
            { label: "Focus Score", value: "87%", trend: "+12" },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 8,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{
                fontSize: 9,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#5A5A62",
                fontFamily: "'Geist Mono', monospace",
                marginBottom: 4,
              }}>{stat.label}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{
                  fontSize: 20,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  fontFamily: "'Newsreader', serif",
                }}>{stat.value}</span>
                <span style={{
                  fontSize: 10,
                  fontFamily: "'Geist Mono', monospace",
                  color: stat.trend.startsWith("+") ? "#818CF8" : "#5A5A62",
                }}>{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Left panel: Task list */}
        <div style={{
          borderRadius: 8,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}>
          <div style={{
            fontSize: 9,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#5A5A62",
            fontFamily: "'Geist Mono', monospace",
            marginBottom: 10,
          }}>Today's Focus</div>
          {[
            { text: "Review Q1 strategy doc", ai: true, glow: true },
            { text: "Respond to design feedback", ai: false, glow: false },
            { text: "Update project timeline", ai: true, glow: false },
            { text: "Prepare standup notes", ai: true, glow: false },
          ].map((task, i) => (
            <div key={i} style={{
              padding: "8px 10px",
              borderRadius: 6,
              background: task.glow ? "rgba(129,140,248,0.06)" : "transparent",
              border: `1px solid ${task.glow ? "rgba(129,140,248,0.15)" : "transparent"}`,
              marginBottom: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 14, height: 14, borderRadius: 4,
                  border: `1.5px solid ${task.ai ? "rgba(129,140,248,0.4)" : "#2A2A2E"}`,
                  background: task.ai ? "rgba(129,140,248,0.08)" : "transparent",
                }} />
                <span style={{ fontSize: 12, letterSpacing: "-0.01em", color: "#ECECEE" }}>
                  {task.text}
                </span>
              </div>
              {task.ai && (
                <div style={{
                  width: 5, height: 5, borderRadius: "50%",
                  background: "#818CF8",
                  boxShadow: "0 0 6px rgba(129,140,248,0.5)",
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Right panel: AI Activity */}
        <div style={{
          borderRadius: 8,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}>
          <div style={{
            fontSize: 9,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#5A5A62",
            fontFamily: "'Geist Mono', monospace",
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: "50%",
              background: "#818CF8",
              boxShadow: "0 0 6px rgba(129,140,248,0.4)",
              animation: isActive ? "dmPulse 2s infinite" : "none",
            }} />
            AI Activity
          </div>
          {[
            { time: "9:02", action: "Summarized Q1 strategy doc", type: "complete" },
            { time: "9:01", action: "Classified 7 inbox items", type: "complete" },
            { time: "8:58", action: "Drafted standup notes", type: "complete" },
            { time: "now", action: "Analyzing timeline dependencies...", type: "active" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex",
              gap: 10,
              padding: "7px 0",
              borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none",
            }}>
              <span style={{
                fontSize: 9.5,
                fontFamily: "'Geist Mono', monospace",
                color: item.type === "active" ? "#818CF8" : "#5A5A62",
                width: 30,
                flexShrink: 0,
                paddingTop: 1,
              }}>{item.time}</span>
              <div style={{ position: "relative", paddingLeft: 12 }}>
                <div style={{
                  position: "absolute",
                  left: 0, top: 5,
                  width: 5, height: 5,
                  borderRadius: "50%",
                  background: item.type === "active" ? "#818CF8" : "#2A2A2E",
                  boxShadow: item.type === "active" ? "0 0 6px rgba(129,140,248,0.5)" : "none",
                }} />
                <span style={{
                  fontSize: 11,
                  color: item.type === "active" ? "#ECECEE" : "#8B8B94",
                  letterSpacing: "-0.01em",
                }}>
                  {item.action}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN: Direction Selector
   ───────────────────────────────────────────── */
const meta = [
  {
    id: "quiet-intelligence",
    name: "Quiet Intelligence",
    subtitle: "Single-column focus. AI whispers inline.",
    layout: "Single column, no sidebar, breadcrumb nav only",
    components: "Borderless text rows, inline margin annotations, no card chrome",
    aiSurface: "Left-border annotations on tasks, quiet suggestion blocks at bottom",
    differentiator: "No chrome, no sidebar — just content and quiet AI annotations in the margin. AI never interrupts; it annotates. Best for users who want total focus.",
    Component: QuietIntelligence,
  },
  {
    id: "structured-signal",
    name: "Structured Signal",
    subtitle: "Dense 3-panel grid. Data-rich and systematic.",
    layout: "3-column: filter sidebar + data table + context panel",
    components: "Table rows with column headers, confidence bars, classification chips, dense metadata",
    aiSurface: "Confidence scores per task, auto-classification tags, structured recommendation panel",
    differentiator: "Information-dense, Bloomberg-influenced. Every task has metadata, a confidence score, and a classification tag. AI is systematic and accountable — nothing hidden.",
    Component: StructuredSignal,
  },
  {
    id: "soft-engine",
    name: "Soft Engine",
    subtitle: "Split view with always-on AI copilot chat.",
    layout: "Split: rounded card list + persistent conversational AI panel",
    components: "Rounded cards, pill navigation, chat bubbles, tappable action chips",
    aiSurface: "Persistent copilot chat panel with message bubbles and quick-action chips",
    differentiator: "The AI copilot is a first-class citizen with its own persistent panel. It's conversational, proactive, and always visible — like working alongside a teammate.",
    Component: SoftEngine,
  },
  {
    id: "dark-matter",
    name: "Dark Matter",
    subtitle: "Command-palette-centric. Floating panels. Luminous AI.",
    layout: "Stats bar + 2-column floating panel grid + command palette as primary",
    components: "Glass panels, stat cards, activity timeline, glow indicators, ⌘K bar",
    aiSurface: "Ambient activity log, luminous dot indicators, AI command bar as primary interaction",
    differentiator: "The command palette IS the interface. Floating panels create layers. AI is ambient — represented by light, glows, and a real-time activity stream.",
    Component: DarkMatter,
  },
];

export default function DesignDirections() {
  const [active, setActive] = useState(0);
  const m = meta[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600&family=Karla:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,600&family=Nunito+Sans:wght@300;400;500;600&family=Fira+Code:wght@400;500&family=Newsreader:opsz,wght@6..72,300;6..72,400;6..72,500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes qiPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes sePulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        @keyframes dmPulse { 0%,100%{opacity:1;box-shadow:0 0 6px rgba(129,140,248,0.4)} 50%{opacity:0.4;box-shadow:0 0 2px rgba(129,140,248,0.2)} }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dir-btn {
          padding: 0;
          border: none;
          background: none;
          cursor: pointer;
          text-align: left;
          outline: none;
          flex: 1;
          min-width: 0;
        }

        .dir-btn:focus-visible {
          outline: 2px solid #6366F1;
          outline-offset: 2px;
          border-radius: 10px;
        }

        .detail-row {
          padding: 12px 0;
          border-bottom: 1px solid #F0F0F0;
        }

        .detail-row:last-child {
          border-bottom: none;
        }

        .detail-label {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #AAA;
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 4px;
        }

        .detail-value {
          font-size: 12.5px;
          color: #444;
          line-height: 1.5;
          letter-spacing: -0.01em;
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "#FAFAFA",
        fontFamily: "'DM Sans', sans-serif",
        color: "#1a1a1a",
        padding: "36px 28px 60px",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        {/* Header */}
        <div style={{
          marginBottom: 28,
          animation: "fadeUp 0.6s ease",
        }}>
          <div style={{
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: 6,
            fontFamily: "'JetBrains Mono', monospace",
          }}>Design Exploration · 4 Directions</div>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 34,
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: 6,
          }}>B2B Workflow · AI-First UI</h1>
          <p style={{
            fontSize: 13.5,
            color: "#777",
            maxWidth: 560,
            lineHeight: 1.55,
          }}>
            Four distinct layout architectures, component systems, and approaches to surfacing AI intelligence. Click any thumbnail to explore.
          </p>
        </div>

        {/* Thumbnails row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
          marginBottom: 28,
          animation: "fadeUp 0.6s ease 0.1s both",
        }}>
          {meta.map((d, i) => {
            const C = d.Component;
            return (
              <button key={d.id} className="dir-btn" onClick={() => setActive(i)}>
                <div style={{
                  height: 170,
                  marginBottom: 8,
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform: i === active ? "scale(1)" : "scale(0.97)",
                  opacity: i === active ? 1 : 0.55,
                  pointerEvents: "none",
                }}>
                  <C isActive={i === active} />
                </div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: i === active ? "#1a1a1a" : "#ddd",
                    transition: "background 0.3s",
                  }} />
                  <span style={{
                    fontSize: 12,
                    fontWeight: i === active ? 600 : 400,
                    color: i === active ? "#1a1a1a" : "#999",
                    transition: "color 0.3s",
                    letterSpacing: "-0.01em",
                  }}>{d.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active direction: large preview + details */}
        <div
          key={m.id}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: 20,
            animation: "fadeUp 0.35s ease",
            alignItems: "start",
          }}
        >
          {/* Large preview */}
          <div style={{ height: 520 }}>
            <m.Component isActive={true} />
          </div>

          {/* Details panel */}
          <div style={{
            padding: "20px 22px",
            background: "#FFFFFF",
            borderRadius: 12,
            border: "1px solid #EBEBEB",
          }}>
            <div style={{
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#bbb",
              fontFamily: "'JetBrains Mono', monospace",
              marginBottom: 4,
            }}>Direction {active + 1} of 4</div>

            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 26,
              fontWeight: 400,
              letterSpacing: "-0.025em",
              marginBottom: 3,
              lineHeight: 1.15,
            }}>{m.name}</h2>

            <p style={{
              fontSize: 13,
              color: "#888",
              fontStyle: "italic",
              marginBottom: 18,
              lineHeight: 1.45,
            }}>{m.subtitle}</p>

            <div className="detail-row">
              <div className="detail-label">Layout Architecture</div>
              <div className="detail-value">{m.layout}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">Component Style</div>
              <div className="detail-value">{m.components}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">How AI Surfaces</div>
              <div className="detail-value">{m.aiSurface}</div>
            </div>

            <div style={{
              marginTop: 16,
              padding: "14px 16px",
              borderRadius: 8,
              background: "#F8F8F8",
              border: "1px solid #EBEBEB",
            }}>
              <div className="detail-label" style={{ marginBottom: 5 }}>What makes it different</div>
              <div style={{ fontSize: 12.5, color: "#555", lineHeight: 1.55 }}>
                {m.differentiator}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
