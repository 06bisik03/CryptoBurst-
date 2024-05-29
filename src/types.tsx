export interface Item {
    name: string;
}
export interface PageButtonProps {
    index: number;
    label?: string;
    handleClick: (index: number) => void;
    currentPage: number;
  }
  
  export interface CoinTypeSelectorProps {
    choices: string[];
    onChange: (choice: string) => void;
    current: string;
  }
  
  export interface PaginationControlsProps {
    currentPage: number;
    totalPages: number;
    handleClick: (index: number) => void;
    handlePrevClick: () => void;
    handleNextClick: () => void;
    maxButtons: number;
  }
  export interface CoinTableProps {
  items: Item[];
  onChange: (newPage: number) => void;
}
export interface CustomDropdownProps {
  options: string[];
  selected: string;
  onChange: (selected: string) => void;
}