"use client"

export function DependencyChunkingDiff() {
  return (
    <div className="relative border-2 border-foreground bg-[#111418]" style={{ display: "flex", flexDirection: "column" }}>
      {/* File tab */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[#2E3F4F] bg-[#0a0c0e]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#6B7C85]" />
        <span className="text-[9px] font-mono font-semibold text-[#C8CDD0] tracking-wider">
          chunker.py
        </span>
        <span className="ml-auto text-[8px] text-[#6B7C85] tracking-wider uppercase border border-[#2E3F4F] px-1.5 py-0.5">
          dep chunking
        </span>
      </div>

      {/* Code diff */}
      <div style={{ fontSize: "9px", lineHeight: "1.65", minHeight: "300px" }}>
        {/* Removed lines */}
        <div className="bg-[#0d1a26] border-l-2 border-[#2E3F4F]">
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">21</span>
            <span className="w-3 text-center text-[#2E3F4F] font-bold">−</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#8E9BA3]">def </span>
              <span className="text-[#C8CDD0]">chunk_modules</span>
              <span className="text-[#6B7C85]">(</span>
              <span className="text-[#b0bec5]">graph</span>
              <span className="text-[#6B7C85]">, </span>
              <span className="text-[#b0bec5]">max_size</span>
              <span className="text-[#6B7C85]">):</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">22</span>
            <span className="w-3 text-center text-[#2E3F4F] font-bold">−</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#b0bec5]">    chunks</span>
              <span className="text-[#6B7C85]">, </span>
              <span className="text-[#b0bec5]">cur</span>
              <span className="text-[#6B7C85]">, </span>
              <span className="text-[#b0bec5]">size </span>
              <span className="text-[#6B7C85]">= [], [], </span>
              <span className="text-[#7a9bae]">0</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">23</span>
            <span className="w-3 text-center text-[#2E3F4F] font-bold">−</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#8E9BA3]">    for </span>
              <span className="text-[#b0bec5]">node </span>
              <span className="text-[#8E9BA3]">in </span>
              <span className="text-[#b0bec5]">graph</span>
              <span className="text-[#6B7C85]">.</span>
              <span className="text-[#b0bec5]">nodes</span>
              <span className="text-[#6B7C85]">:</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">24</span>
            <span className="w-3 text-center text-[#2E3F4F] font-bold">−</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#b0bec5]">        size </span>
              <span className="text-[#6B7C85]">+= </span>
              <span className="text-[#b0bec5]">graph</span>
              <span className="text-[#6B7C85]">.</span>
              <span className="text-[#b0bec5]">nodes</span>
              <span className="text-[#6B7C85]">[</span>
              <span className="text-[#b0bec5]">node</span>
              <span className="text-[#6B7C85]">][</span>
              <span className="text-[#a8bfc9]">"size"</span>
              <span className="text-[#6B7C85]">]</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">25</span>
            <span className="w-3 text-center text-[#2E3F4F] font-bold">−</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#b0bec5]">        cur</span>
              <span className="text-[#6B7C85]">.</span>
              <span className="text-[#C8CDD0]">append</span>
              <span className="text-[#6B7C85]">(</span>
              <span className="text-[#b0bec5]">node</span>
              <span className="text-[#6B7C85]">)</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">26</span>
            <span className="w-3 text-center text-[#2E3F4F] font-bold">−</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#8E9BA3]">        if </span>
              <span className="text-[#b0bec5]">size </span>
              <span className="text-[#6B7C85">{'>'} </span>
              <span className="text-[#b0bec5]">max_size</span>
              <span className="text-[#6B7C85]">:</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">27</span>
            <span className="w-3 text-center text-[#2E3F4F] font-bold">−</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#b0bec5]">            chunks</span>
              <span className="text-[#6B7C85]">.</span>
              <span className="text-[#C8CDD0]">append</span>
              <span className="text-[#6B7C85]">(</span>
              <span className="text-[#b0bec5]">cur</span>
              <span className="text-[#6B7C85]">)</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">28</span>
            <span className="w-3 text-center text-[#2E3F4F] font-bold">−</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#b0bec5]">            cur</span>
              <span className="text-[#6B7C85]">, </span>
              <span className="text-[#b0bec5]">size </span>
              <span className="text-[#6B7C85]">= [], </span>
              <span className="text-[#7a9bae]">0</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">29</span>
            <span className="w-3 text-center text-[#2E3F4F] font-bold">−</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#8E9BA3]">    return </span>
              <span className="text-[#b0bec5]">chunks </span>
              <span className="text-[#6B7C85]">+ [</span>
              <span className="text-[#b0bec5]">cur</span>
              <span className="text-[#6B7C85]">]</span>
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#2E3F4F]" />

        {/* Added lines */}
        <div className="bg-[#111e28] border-l-2 border-[#6B7C85]">
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">21</span>
            <span className="w-3 text-center text-[#6B7C85] font-bold">+</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#8E9BA3]">def </span>
              <span className="text-[#C8CDD0]">chunk_modules</span>
              <span className="text-[#6B7C85]">(</span>
              <span className="text-[#b0bec5]">graph</span>
              <span className="text-[#6B7C85]">, </span>
              <span className="text-[#b0bec5]">max_size</span>
              <span className="text-[#6B7C85]">):</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">22</span>
            <span className="w-3 text-center text-[#6B7C85] font-bold">+</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#3a4a58] italic">    # toposort keeps deps before dependents</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">23</span>
            <span className="w-3 text-center text-[#6B7C85] font-bold">+</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#b0bec5]">    ordered </span>
              <span className="text-[#6B7C85]">= </span>
              <span className="text-[#b0bec5]">nx</span>
              <span className="text-[#6B7C85]">.</span>
              <span className="text-[#C8CDD0]">topological_sort</span>
              <span className="text-[#6B7C85]">(</span>
              <span className="text-[#b0bec5]">graph</span>
              <span className="text-[#6B7C85]">)</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">24</span>
            <span className="w-3 text-center text-[#6B7C85] font-bold">+</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#b0bec5]">    chunks</span>
              <span className="text-[#6B7C85]">, </span>
              <span className="text-[#b0bec5]">cur</span>
              <span className="text-[#6B7C85]">, </span>
              <span className="text-[#b0bec5]">size </span>
              <span className="text-[#6B7C85]">= [], [], </span>
              <span className="text-[#7a9bae]">0</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">25</span>
            <span className="w-3 text-center text-[#6B7C85] font-bold">+</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#8E9BA3]">    for </span>
              <span className="text-[#b0bec5]">node </span>
              <span className="text-[#8E9BA3]">in </span>
              <span className="text-[#b0bec5]">ordered</span>
              <span className="text-[#6B7C85]">:</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">26</span>
            <span className="w-3 text-center text-[#6B7C85] font-bold">+</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#b0bec5]">        n </span>
              <span className="text-[#6B7C85]">= </span>
              <span className="text-[#b0bec5]">graph</span>
              <span className="text-[#6B7C85]">.</span>
              <span className="text-[#b0bec5]">nodes</span>
              <span className="text-[#6B7C85]">[</span>
              <span className="text-[#b0bec5]">node</span>
              <span className="text-[#6B7C85]">].</span>
              <span className="text-[#C8CDD0]">get</span>
              <span className="text-[#6B7C85]">(</span>
              <span className="text-[#a8bfc9]">"size"</span>
              <span className="text-[#6B7C85]">, </span>
              <span className="text-[#7a9bae]">1</span>
              <span className="text-[#6B7C85]">)</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">27</span>
            <span className="w-3 text-center text-[#6B7C85] font-bold">+</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#8E9BA3]">        if </span>
              <span className="text-[#b0bec5]">size </span>
              <span className="text-[#6B7C85]">+ </span>
              <span className="text-[#b0bec5]">n </span>
              <span className="text-[#6B7C85]">{'>'} </span>
              <span className="text-[#b0bec5]">max_size </span>
              <span className="text-[#8E9BA3]">and </span>
              <span className="text-[#b0bec5]">cur</span>
              <span className="text-[#6B7C85]">:</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">28</span>
            <span className="w-3 text-center text-[#6B7C85] font-bold">+</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#b0bec5]">            chunks</span>
              <span className="text-[#6B7C85]">.</span>
              <span className="text-[#C8CDD0]">append</span>
              <span className="text-[#6B7C85]">(</span>
              <span className="text-[#b0bec5]">cur</span>
              <span className="text-[#6B7C85]">)</span>
              <span className="text-[#6B7C85]">; </span>
              <span className="text-[#b0bec5]">cur</span>
              <span className="text-[#6B7C85]">, </span>
              <span className="text-[#b0bec5]">size </span>
              <span className="text-[#6B7C85]">= [], </span>
              <span className="text-[#7a9bae]">0</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">29</span>
            <span className="w-3 text-center text-[#6B7C85] font-bold">+</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#b0bec5]">        cur</span>
              <span className="text-[#6B7C85]">.</span>
              <span className="text-[#C8CDD0]">append</span>
              <span className="text-[#6B7C85]">(</span>
              <span className="text-[#b0bec5]">node</span>
              <span className="text-[#6B7C85]">)</span>
              <span className="text-[#6B7C85]">; </span>
              <span className="text-[#b0bec5]">size </span>
              <span className="text-[#6B7C85]">+= </span>
              <span className="text-[#b0bec5]">n</span>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-7 text-right pr-2 text-[#3a4a58] text-[8px]">30</span>
            <span className="w-3 text-center text-[#6B7C85] font-bold">+</span>
            <span className="flex-1 px-2.5 py-0.5 whitespace-pre font-mono">
              <span className="text-[#8E9BA3]">    return </span>
              <span className="text-[#b0bec5]">chunks </span>
              <span className="text-[#6B7C85]">+ ([</span>
              <span className="text-[#b0bec5]">cur</span>
              <span className="text-[#6B7C85]">] </span>
              <span className="text-[#8E9BA3]">if </span>
              <span className="text-[#b0bec5]">cur </span>
              <span className="text-[#8E9BA3]">else </span>
              <span className="text-[#6B7C85]">[])</span>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-t border-[#1e2530] text-[8px] text-[#6B7C85] tracking-wider uppercase">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2E3F4F]" />
          <span>before</span>
        </div>
        <span className="text-[#1e2530]">·</span>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#6B7C85]" />
          <span>after</span>
        </div>
        <span className="ml-auto text-[#1e2530]">+10 / −9</span>
      </div>
    </div>
  )
}

