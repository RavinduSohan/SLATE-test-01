import mongoose from 'mongoose';

const stationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    distanceFromPrevious: { type: Number, required: true },
    times: [{ station: String, time: Date }],
});

const stations = mongoose.model('stations', stationSchema);

export default stations;
