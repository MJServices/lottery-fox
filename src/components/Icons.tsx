// Icon components using actual Figma SVG files
export function GameIcon({ className }: { className?: string }) {
  return (
    <img
      src="/images/game-icon.svg"
      alt="Game"
      className={`w-4 h-4 ${className || ''}`}
    />
  );
}

export function ChatQuestionIcon({ className }: { className?: string }) {
  return (
    <img
      src="/images/chat-question-icon.svg"
      alt="Chat Question"
      className={`w-4 h-4 ${className || ''}`}
    />
  );
}

export function CursorInfoIcon({ className }: { className?: string }) {
  return (
    <img
      src="/images/cursor-info-icon.svg"
      alt="Cursor Info"
      className={`w-4 h-4 ${className || ''}`}
    />
  );
}

export function CheckmarkBadgeIcon({ className }: { className?: string }) {
  return (
    <img
      src="/images/checkmark-badge-icon.svg"
      alt="Checkmark Badge"
      className={`w-4 h-4 ${className || ''}`}
    />
  );
}

export const DoorIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <img
    src="/images/door-icon.svg"
    alt="Door"
    className={className}
  />
);

export const UserMultipleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <img
    src="/images/user-multiple-icon.svg"
    alt="Users"
    className={className}
  />
);

export const ClockIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7.17" stroke="currentColor" strokeWidth="1.67"/>
    <path d="M8 4.33V8l2.67 2.67" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TicketIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.83" y="1.83" width="14.33" height="12.33" rx="2" stroke="currentColor" strokeWidth="1.67"/>
    <path d="M5.5 6.5L10.5 11.5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round"/>
    <path d="M10.5 6.5L5.5 11.5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round"/>
  </svg>
);

export const CoinsIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6.17" cy="9.83" r="5.33" stroke="currentColor" strokeWidth="1.67"/>
    <circle cx="9.83" cy="6.17" r="5.33" stroke="currentColor" strokeWidth="1.67"/>
  </svg>
);

export const ChampionIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <img
    src="/images/champion-icon.svg"
    alt="Champion"
    className={className}
  />
);