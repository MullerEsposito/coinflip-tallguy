program puzzle_coinflip.aleo {
  mapping flip_history: u16 => bool;
  mapping total_flips: u8 => u16;

  async transition flip(result: bool) -> Future {
    return store_flip(result);
  }

  async function store_flip(result: bool) {
    let current_total: u16 = Mapping::get_or_use(total_flips, 0u8, 0u16);
    Mapping::set(flip_history, current_total, result);
    Mapping::set(total_flips, 0u8, current_total + 1u16);
  }
}
