/**
 * DemoBar.tsx — Barra Flutuante do Modo Demo
 *
 * Exibida apenas quando VITE_DEMO_MODE=true.
 * Fixada no centro inferior da tela com badge "MODO DEMO" e botão de reset.
 */

import React, { useState, useEffect } from 'react';
import { resetAllDemoStores } from '../services/demoStore';
import { forceSeedDemoData } from '../services/demoSeed';

export function DemoBar() {
  const [resetting, setResetting] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [showCredentials, setShowCredentials] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const msg = (e as CustomEvent).detail?.message;
      if (msg) {
        setToastMsg(msg);
        setTimeout(() => setToastMsg(null), 4000);
      }
    };
    window.addEventListener('demo-toast', handler);
    return () => window.removeEventListener('demo-toast', handler);
  }, []);

  async function handleReset() {
    if (resetting) return;
    setResetting(true);
    setShowCredentials(false);
    try {
      resetAllDemoStores();
      await new Promise((r) => setTimeout(r, 300));
      forceSeedDemoData();
      await new Promise((r) => setTimeout(r, 200));
      window.location.href = '/login';
    } finally {
      setResetting(false);
    }
  }

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 1500);
    });
  }

  return (
    <>
      {/* Popover de credenciais */}
      {showCredentials && (
        <div
          style={{ zIndex: 9998 }}
          className="fixed bottom-16 left-1/2 -translate-x-1/2 w-72
                     bg-zinc-900 border border-yellow-500/30 rounded-2xl p-4
                     shadow-2xl shadow-black/70"
        >
          {/* Título */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
              Credenciais DEMO
            </p>
            <button
              onClick={() => setShowCredentials(false)}
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Admin */}
          <div className="mb-3 rounded-xl bg-zinc-800/80 border border-zinc-700/50 p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2 py-0.5 rounded-full uppercase tracking-wide">
                Admin
              </span>
            </div>
            <CredentialRow
              label="Email"
              value="admin@demo.tubarao.com"
              copied={copied}
              onCopy={copyToClipboard}
            />
            <CredentialRow
              label="Senha"
              value="demo123"
              copied={copied}
              onCopy={copyToClipboard}
            />
          </div>

          {/* Cliente */}
          <div className="rounded-xl bg-zinc-800/80 border border-zinc-700/50 p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full uppercase tracking-wide">
                Cliente
              </span>
            </div>
            <CredentialRow
              label="Email"
              value="cliente@demo.tubarao.com"
              copied={copied}
              onCopy={copyToClipboard}
            />
            <CredentialRow
              label="Senha"
              value="demo123"
              copied={copied}
              onCopy={copyToClipboard}
            />
          </div>

          <p className="text-zinc-600 text-[10px] text-center mt-3">
            Qualquer senha funciona • Email com "admin" = painel admin
          </p>
        </div>
      )}

      {/* Barra flutuante */}
      <div
        style={{ zIndex: 9999 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1
                   bg-zinc-950/95 border border-yellow-500/30 rounded-2xl
                   shadow-2xl shadow-black/60 backdrop-blur-sm select-none overflow-hidden"
      >
        {/* Badge MODO DEMO */}
        <button
          onClick={() => setShowCredentials((v) => !v)}
          className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-yellow-500/5 transition-colors rounded-l-2xl"
          title="Ver credenciais"
        >
          <span className="relative flex items-center">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-yellow-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
          </span>
          <span className="text-yellow-400 text-[11px] font-bold tracking-widest uppercase">
            Modo Demo
          </span>
          <svg
            className={`h-3 w-3 text-yellow-500/60 transition-transform ${showCredentials ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {/* Divisor */}
        <span className="w-px h-5 bg-zinc-800 flex-shrink-0" />

        {/* Botão Resetar */}
        <button
          onClick={handleReset}
          disabled={resetting}
          className="flex items-center gap-2 px-4 py-2.5 text-zinc-400 hover:text-red-400
                     hover:bg-red-500/5 transition-all disabled:opacity-40
                     disabled:cursor-not-allowed rounded-r-2xl group"
        >
          {resetting ? (
            <>
              <svg className="animate-spin h-3.5 w-3.5 text-red-400" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span className="text-[11px] font-medium text-red-400">Resetando...</span>
            </>
          ) : (
            <>
              <svg
                className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 duration-500"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              <span className="text-[11px] font-medium">Resetar Demo</span>
            </>
          )}
        </button>
      </div>

      {/* Toast de notificação simulada */}
      {toastMsg && (
        <div
          style={{ zIndex: 10000 }}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 max-w-sm w-full px-4"
        >
          <div className="bg-zinc-900 border border-green-500/30 rounded-2xl px-4 py-3
                          shadow-2xl shadow-black/50 flex items-start gap-3">
            <span className="text-green-400 text-base flex-shrink-0 mt-0.5">🔔</span>
            <div>
              <p className="text-[11px] font-semibold text-green-400 mb-0.5">Notificação Simulada</p>
              <p className="text-xs text-zinc-300 leading-relaxed">{toastMsg}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Sub-componente linha de credencial ───────────────────────────────────────

function CredentialRow({
  label,
  value,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  copied: string | null;
  onCopy: (value: string, label: string) => void;
}) {
  const isCopied = copied === value;
  return (
    <button
      onClick={() => onCopy(value, value)}
      className="w-full flex items-center justify-between gap-2 group mb-1 last:mb-0
                 py-1 px-1 rounded-lg hover:bg-zinc-700/40 transition-colors"
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-zinc-500 text-[10px] w-8 flex-shrink-0">{label}</span>
        <span className="text-zinc-200 text-[11px] font-mono truncate">{value}</span>
      </div>
      <span className={`text-[10px] flex-shrink-0 transition-colors ${isCopied ? 'text-green-400' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
        {isCopied ? '✓ copiado' : 'copiar'}
      </span>
    </button>
  );
}
