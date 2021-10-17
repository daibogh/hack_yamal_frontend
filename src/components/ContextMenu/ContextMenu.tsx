import React, { useRef, useState } from 'react';
import { ContextMenu as ContextMenuTemplate } from '@consta/uikit/ContextMenu';
import { Button } from '@consta/uikit/Button';
import { IconArrowDown } from '@consta/uikit/IconArrowDown';

interface ContextMenuProps {
  className?: string;
  items: {id:number; name:string}[];
  onSelect: (event: {id:number; name:string}) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  className,
  items,
  onSelect,
}) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onlyIcon
        view="clear"
        size="s"
        iconLeft={IconArrowDown}
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <ContextMenuTemplate
          items={items}
          getOnClick={(item) => () => (setIsOpen(false), onSelect(item))}
          getLabel={(item) => item.name}
          anchorRef={ref}
          onBlur={()=>setIsOpen(false)}
          direction="downStartLeft"
          onClickOutside={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ContextMenu;
