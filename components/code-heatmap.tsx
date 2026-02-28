"use client"

export function CodeHeatmap() {
  return (
    <div className="relative border-2 border-foreground bg-[#111418]" style={{ display: "flex", flexDirection: "column" }}>
      {/* File tab */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[#2E3F4F] bg-[#0a0c0e]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#6B7C85]" />
        <span className="text-[9px] font-mono font-semibold text-[#C8CDD0] tracking-wider">
          auth_handler.py
        </span>
        <span className="ml-auto text-[8px] text-[#6B7C85] tracking-wider uppercase border border-[#2E3F4F] px-1.5 py-0.5">
          heatmap
        </span>
      </div>

      {/* Code rows */}
      <div style={{ fontSize: "9px", lineHeight: "1.65", minHeight: "300px" }}>
        {/* Low risk */}
        <div className="flex items-center relative">
          <div className="w-0.5 self-stretch flex-shrink-0 bg-transparent" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>01</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#8E9BA3]">import </span>
            <span className="text-[#b0bec5]">hashlib</span>
            <span className="text-[#6B7C85]">, </span>
            <span className="text-[#b0bec5]">secrets</span>
            <span className="text-[#6B7C85]">, </span>
            <span className="text-[#b0bec5]">time</span>
          </span>
        </div>
        <div className="flex items-center relative">
          <div className="self-stretch flex-shrink-0 bg-transparent" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>02</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#8E9BA3]">from </span>
            <span className="text-[#b0bec5]">db </span>
            <span className="text-[#8E9BA3]">import </span>
            <span className="text-[#b0bec5]">users</span>
            <span className="text-[#6B7C85]">, </span>
            <span className="text-[#b0bec5]">sessions</span>
          </span>
        </div>
        <div className="flex items-center relative">
          <div className="self-stretch flex-shrink-0 bg-transparent" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>03</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis"></span>
        </div>

        {/* Medium-low */}
        <div className="flex items-center relative bg-[rgba(46,63,79,0.35)]">
          <div className="self-stretch flex-shrink-0 bg-[#2E3F4F]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>04</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#8E9BA3]">def </span>
            <span className="text-[#C8CDD0]">hash_password</span>
            <span className="text-[#6B7C85]">(</span>
            <span className="text-[#b0bec5]">pw</span>
            <span className="text-[#6B7C85]">: </span>
            <span className="text-[#7a9bae]">str</span>
            <span className="text-[#6B7C85]">) -</span>
            <span className="text-[#6B7C85]">{'>'} </span>
            <span className="text-[#7a9bae]">str</span>
            <span className="text-[#6B7C85]">:</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#2E3F4F]">▪ 18</span>
        </div>
        <div className="flex items-center relative bg-[rgba(46,63,79,0.35)]">
          <div className="self-stretch flex-shrink-0 bg-[#2E3F4F]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>05</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#8E9BA3]">    return </span>
            <span className="text-[#b0bec5]">hashlib</span>
            <span className="text-[#6B7C85]">.</span>
            <span className="text-[#C8CDD0]">sha256</span>
            <span className="text-[#6B7C85]">(</span>
            <span className="text-[#b0bec5]">pw</span>
            <span className="text-[#6B7C85]">.</span>
            <span className="text-[#C8CDD0]">encode</span>
            <span className="text-[#6B7C85]">()).</span>
            <span className="text-[#C8CDD0]">hexdigest</span>
            <span className="text-[#6B7C85]">()</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#2E3F4F]">▪ 18</span>
        </div>
        <div className="flex items-center relative">
          <div className="self-stretch flex-shrink-0 bg-transparent" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>06</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis"></span>
        </div>

        {/* High risk block */}
        <div className="flex items-center relative bg-[rgba(142,155,163,0.28)]">
          <div className="self-stretch flex-shrink-0 bg-[#8E9BA3]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>07</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#8E9BA3]">def </span>
            <span className="text-[#C8CDD0]">authenticate</span>
            <span className="text-[#6B7C85]">(</span>
            <span className="text-[#b0bec5]">user</span>
            <span className="text-[#6B7C85]">, </span>
            <span className="text-[#b0bec5]">pw</span>
            <span className="text-[#6B7C85]">):</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#8E9BA3]">▪ 74</span>
        </div>
        <div className="flex items-center relative bg-[rgba(107,124,133,0.30)]">
          <div className="self-stretch flex-shrink-0 bg-[#6B7C85]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>08</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#b0bec5]">    record </span>
            <span className="text-[#6B7C85]">= </span>
            <span className="text-[#b0bec5]">users</span>
            <span className="text-[#6B7C85]">.</span>
            <span className="text-[#C8CDD0]">find_one</span>
            <span className="text-[#6B7C85]">(</span>
            <span className="text-[#a8bfc9]">{'{'}"email"{'}'}</span>
            <span className="text-[#6B7C85]">: </span>
            <span className="text-[#b0bec5]">user</span>
            <span className="text-[#6B7C85]">{'}'})</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#6B7C85]">▪ 51</span>
        </div>
        <div className="flex items-center relative bg-[rgba(200,205,208,0.22)]">
          <div className="self-stretch flex-shrink-0 bg-[#C8CDD0]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>09</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#8E9BA3]">    if </span>
            <span className="text-[#b0bec5]">record</span>
            <span className="text-[#6B7C85]">[</span>
            <span className="text-[#a8bfc9]">"pw"</span>
            <span className="text-[#6B7C85]">] == </span>
            <span className="text-[#C8CDD0]">hash_password</span>
            <span className="text-[#6B7C85]">(</span>
            <span className="text-[#b0bec5]">pw</span>
            <span className="text-[#6B7C85]">):</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#C8CDD0]">▪ 91</span>
        </div>
        <div className="flex items-center relative bg-[rgba(200,205,208,0.22)]">
          <div className="self-stretch flex-shrink-0 bg-[#C8CDD0]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>10</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#b0bec5]">        token </span>
            <span className="text-[#6B7C85]">= </span>
            <span className="text-[#b0bec5]">secrets</span>
            <span className="text-[#6B7C85]">.</span>
            <span className="text-[#C8CDD0]">token_hex</span>
            <span className="text-[#6B7C85]">(</span>
            <span className="text-[#7a9bae]">16</span>
            <span className="text-[#6B7C85]">)</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#C8CDD0]">▪ 88</span>
        </div>
        <div className="flex items-center relative bg-[rgba(200,205,208,0.22)]">
          <div className="self-stretch flex-shrink-0 bg-[#C8CDD0]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>11</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#b0bec5]">        sessions</span>
            <span className="text-[#6B7C85]">[</span>
            <span className="text-[#b0bec5]">token</span>
            <span className="text-[#6B7C85]">] = {'{'}</span>
            <span className="text-[#a8bfc9]">"user"</span>
            <span className="text-[#6B7C85]">: </span>
            <span className="text-[#b0bec5]">user</span>
            <span className="text-[#6B7C85]">, </span>
            <span className="text-[#a8bfc9]">"ts"</span>
            <span className="text-[#6B7C85]">: </span>
            <span className="text-[#b0bec5]">time</span>
            <span className="text-[#6B7C85]">.</span>
            <span className="text-[#C8CDD0]">time</span>
            <span className="text-[#6B7C85]">(){'}'}</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#C8CDD0]">▪ 92</span>
        </div>
        <div className="flex items-center relative bg-[rgba(142,155,163,0.28)]">
          <div className="self-stretch flex-shrink-0 bg-[#8E9BA3]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>12</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#8E9BA3]">        return </span>
            <span className="text-[#b0bec5]">token</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#8E9BA3]">▪ 67</span>
        </div>
        <div className="flex items-center relative bg-[rgba(107,124,133,0.30)]">
          <div className="self-stretch flex-shrink-0 bg-[#6B7C85]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>13</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#8E9BA3]">    return </span>
            <span className="text-[#8E9BA3]">None</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#6B7C85]">▪ 44</span>
        </div>
        <div className="flex items-center relative">
          <div className="self-stretch flex-shrink-0 bg-transparent" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>14</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis"></span>
        </div>

        {/* Medium risk */}
        <div className="flex items-center relative bg-[rgba(107,124,133,0.30)]">
          <div className="self-stretch flex-shrink-0 bg-[#6B7C85]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>15</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#8E9BA3]">def </span>
            <span className="text-[#C8CDD0]">validate_session</span>
            <span className="text-[#6B7C85]">(</span>
            <span className="text-[#b0bec5]">token</span>
            <span className="text-[#6B7C85]">: </span>
            <span className="text-[#7a9bae]">str</span>
            <span className="text-[#6B7C85]">) -</span>
            <span className="text-[#6B7C85]">{'>'} </span>
            <span className="text-[#7a9bae]">bool</span>
            <span className="text-[#6B7C85]">:</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#6B7C85]">▪ 55</span>
        </div>
        <div className="flex items-center relative bg-[rgba(107,124,133,0.30)]">
          <div className="self-stretch flex-shrink-0 bg-[#6B7C85]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>16</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#b0bec5]">    s </span>
            <span className="text-[#6B7C85]">= </span>
            <span className="text-[#b0bec5]">sessions</span>
            <span className="text-[#6B7C85]">.</span>
            <span className="text-[#C8CDD0]">get</span>
            <span className="text-[#6B7C85]">(</span>
            <span className="text-[#b0bec5]">token</span>
            <span className="text-[#6B7C85]">)</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#6B7C85]">▪ 53</span>
        </div>
        <div className="flex items-center relative bg-[rgba(142,155,163,0.28)]">
          <div className="self-stretch flex-shrink-0 bg-[#8E9BA3]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>17</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#8E9BA3]">    if not </span>
            <span className="text-[#b0bec5]">s </span>
            <span className="text-[#8E9BA3]">or </span>
            <span className="text-[#b0bec5]">time</span>
            <span className="text-[#6B7C85]">.</span>
            <span className="text-[#C8CDD0]">time</span>
            <span className="text-[#6B7C85]">() - </span>
            <span className="text-[#b0bec5]">s</span>
            <span className="text-[#6B7C85]">[</span>
            <span className="text-[#a8bfc9]">"ts"</span>
            <span className="text-[#6B7C85]">] </span>
            <span className="text-[#6B7C85]">{'>'} </span>
            <span className="text-[#7a9bae]">3600</span>
            <span className="text-[#6B7C85]">:</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#8E9BA3]">▪ 71</span>
        </div>
        <div className="flex items-center relative bg-[rgba(107,124,133,0.30)]">
          <div className="self-stretch flex-shrink-0 bg-[#6B7C85]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>18</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#8E9BA3]">        del </span>
            <span className="text-[#b0bec5]">sessions</span>
            <span className="text-[#6B7C85]">[</span>
            <span className="text-[#b0bec5]">token</span>
            <span className="text-[#6B7C85]">]</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#6B7C85]">▪ 49</span>
        </div>
        <div className="flex items-center relative bg-[rgba(46,63,79,0.35)]">
          <div className="self-stretch flex-shrink-0 bg-[#2E3F4F]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>19</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#8E9BA3]">        return </span>
            <span className="text-[#8E9BA3]">False</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#2E3F4F]">▪ 22</span>
        </div>
        <div className="flex items-center relative bg-[rgba(46,63,79,0.35)]">
          <div className="self-stretch flex-shrink-0 bg-[#2E3F4F]" style={{ width: "3px" }} />
          <span className="text-right pr-2 text-[#3a4a58] text-[8px] flex-shrink-0" style={{ width: "26px" }}>20</span>
          <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono overflow-hidden text-ellipsis">
            <span className="text-[#8E9BA3]">    return </span>
            <span className="text-[#8E9BA3]">True</span>
          </span>
          <span className="flex-shrink-0 text-[7px] font-bold tracking-wider px-1.5 pr-0 opacity-85 text-[#2E3F4F]">▪ 15</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 border-t border-[#1e2530] text-[7.5px] text-[#6B7C85] tracking-wider uppercase">
        <span className="flex items-center gap-1">
          <span className="rounded-full bg-[#2E3F4F]" style={{ width: "5px", height: "5px" }} />
          low
        </span>
        <span className="flex items-center gap-1">
          <span className="rounded-full bg-[#6B7C85]" style={{ width: "5px", height: "5px" }} />
          med
        </span>
        <span className="flex items-center gap-1">
          <span className="rounded-full bg-[#8E9BA3]" style={{ width: "5px", height: "5px" }} />
          high
        </span>
        <span className="flex items-center gap-1">
          <span className="rounded-full bg-[#C8CDD0]" style={{ width: "5px", height: "5px" }} />
          critical
        </span>
        <span className="ml-auto text-[#1e2530]">4 critical lines</span>
      </div>
    </div>
  )
}

