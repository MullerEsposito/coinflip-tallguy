program puzzle_coinflip_tallguy.aleo;



mapping flip_history:
	key as u16.public;
	value as boolean.public;


mapping total_flips:
	key as u8.public;
	value as u16.public;


function flip:
    input r0 as boolean.private;
    async flip r0 into r1;
    output r1 as puzzle_coinflip.aleo/flip.future;

finalize flip:
    input r0 as boolean.public;
    get.or_use total_flips[0u8] 0u16 into r1;
    set r0 into flip_history[r1];
    add r1 1u16 into r2;
    set r2 into total_flips[0u8];

